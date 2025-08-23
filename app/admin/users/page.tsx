"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Disclaimer } from "@/components/layout/disclaimer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAuthState } from "@/hooks/use-auth"
import { Users, Search, Edit, Trash2, Plus, Shield } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { useRouter } from "next/navigation"

// Mock admin check - in real app, this would be server-side
const isAdmin = (user: any) => user?.email === 'demo@screpair.com'

const mockUsers = [
  {
    id: '1',
    email: 'demo@screpair.com',
    name: 'Demo User',
    subscription: { active: true, tier: 'yearly', expiresAt: new Date('2024-12-31') },
    joinedAt: new Date('2024-01-15'),
    role: 'admin'
  },
  {
    id: '2',
    email: 'john.doe@example.com',
    name: 'John Doe',
    subscription: { active: true, tier: 'monthly', expiresAt: new Date('2024-03-15') },
    joinedAt: new Date('2024-02-01'),
    role: 'user'
  },
  {
    id: '3',
    email: 'sarah.wilson@example.com',
    name: 'Sarah Wilson',
    subscription: { active: false, tier: null, expiresAt: null },
    joinedAt: new Date('2024-02-10'),
    role: 'user'
  },
  {
    id: '4',
    email: 'mike.johnson@workshop.com',
    name: 'Mike Johnson',
    subscription: { active: true, tier: 'weekly', expiresAt: new Date('2024-02-28') },
    joinedAt: new Date('2024-02-15'),
    role: 'user'
  }
]

function AdminUsersPageContent() {
  const { user } = useAuthState()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredUsers, setFilteredUsers] = useState(mockUsers)

  useEffect(() => {
    if (!user || !isAdmin(user)) {
      router.push('/')
    }
  }, [user, router])

  useEffect(() => {
    if (searchQuery) {
      setFilteredUsers(
        mockUsers.filter(u => 
          u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredUsers(mockUsers)
    }
  }, [searchQuery])

  if (!user || !isAdmin(user)) {
    return null
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => {}} />
      
      <main className="container py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
                <Shield className="h-8 w-8" />
                <span>Admin Dashboard</span>
              </h1>
              <p className="text-muted-foreground">
                Manage users and monitor platform activity
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUsers.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockUsers.filter(u => u.subscription.active).length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,247</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">New This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
          </div>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>User Management</span>
              </CardTitle>
              <CardDescription>
                View and manage all platform users
              </CardDescription>
              
              <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Subscription</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name || 'Unknown'}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.subscription.active ? (
                          <div>
                            <div className="capitalize font-medium">{user.subscription.tier}</div>
                            <div className="text-sm text-muted-foreground">
                              Expires {formatDate(user.subscription.expiresAt!)}
                            </div>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">No subscription</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.subscription.active ? "default" : "secondary"}>
                          {user.subscription.active ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(user.joinedAt)}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'admin' ? "destructive" : "outline"}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex space-x-2 justify-end">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" disabled>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <Disclaimer className="container pb-8" />
      <Footer />
    </div>
  )
}

export default function AdminUsersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <AdminUsersPageContent />
    </Suspense>
  )
}
