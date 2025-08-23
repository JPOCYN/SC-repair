"use client"

import { useState, useEffect } from 'react'
import { storage } from '@/lib/utils'

export interface User {
  id: string
  email: string
  name?: string
}

export interface Subscription {
  active: boolean
  tier: 'daily' | 'weekly' | 'monthly' | 'yearly'
  expiresAt: Date
}

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load from localStorage on mount
    const savedUser = storage.get('sc-repair-user')
    const savedSubscription = storage.get('sc-repair-subscription')
    
    if (savedUser) setUser(savedUser)
    if (savedSubscription) {
      // Check if subscription is still valid
      const sub = {
        ...savedSubscription,
        expiresAt: new Date(savedSubscription.expiresAt)
      }
      if (sub.expiresAt > new Date()) {
        setSubscription(sub)
      } else {
        // Expired, remove from storage
        storage.remove('sc-repair-subscription')
      }
    }
    
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (email === 'demo@screpair.com' && password === 'demo123') {
      const user = { id: '1', email, name: 'Demo User' }
      setUser(user)
      storage.set('sc-repair-user', user)
      return { success: true }
    }
    
    return { success: false, error: 'Invalid credentials' }
  }

  const signup = async (email: string, password: string, confirmPassword: string) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' }
    }
    
    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' }
    }
    
    const user = { id: Date.now().toString(), email }
    setUser(user)
    storage.set('sc-repair-user', user)
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    setSubscription(null)
    storage.remove('sc-repair-user')
    storage.remove('sc-repair-subscription')
  }

  const activateSubscription = async (code: string) => {
    // Mock activation codes
    const validCodes = {
      'DAILY123': 'daily',
      'WEEK123': 'weekly', 
      'MONTH123': 'monthly',
      'YEAR123': 'yearly'
    }

    await new Promise(resolve => setTimeout(resolve, 1500))

    const tier = validCodes[code as keyof typeof validCodes]
    if (!tier) {
      return { success: false, error: 'Invalid activation code' }
    }

    const durations = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365
    }

    const subscription = {
      active: true,
      tier: tier as Subscription['tier'],
      expiresAt: new Date(Date.now() + durations[tier as keyof typeof durations] * 24 * 60 * 60 * 1000)
    }

    setSubscription(subscription)
    storage.set('sc-repair-subscription', subscription)
    return { success: true }
  }

  return {
    user,
    subscription,
    loading,
    login,
    signup,
    logout,
    activateSubscription
  }
}
