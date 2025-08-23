export interface Brand {
  id: string
  name: string
  logo: string // TODO: Replace with actual car brand logo URLs in the future
  modelCount: number
  available?: boolean
  models: Model[]
}

export interface Model {
  id: string
  name: string
  brand: string
  years: number[]
  image: string
  specs?: {
    engine: string
    power: string
    topSpeed: string
  }
}

export interface ManualSection {
  id: string
  title: string
  children?: ManualSection[]
  content?: string
}

export const mockBrands: Brand[] = [
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: '🏁',
    modelCount: 18,
    available: true,
    models: [
      {
        id: '720s',
        name: '720S',
        brand: 'McLaren',
        years: [2017, 2018, 2019, 2020, 2021],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        specs: {
          engine: '4.0L Twin-Turbo V8',
          power: '710 HP',
          topSpeed: '341 km/h'
        }
      },
      {
        id: 'p1',
        name: 'P1',
        brand: 'McLaren',
        years: [2013, 2014, 2015],
        image: 'https://images.unsplash.com/photo-1616788494707-ec4fe9293e0c?w=400',
        specs: {
          engine: '3.8L Twin-Turbo V8 + Electric',
          power: '903 HP',
          topSpeed: '350 km/h'
        }
      }
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: '🏎️',
    modelCount: 25,
    available: false,
    models: [
      {
        id: 'f8-tributo',
        name: 'F8 Tributo',
        brand: 'Ferrari',
        years: [2019, 2020, 2021, 2022],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
        specs: {
          engine: '3.9L Twin-Turbo V8',
          power: '710 HP',
          topSpeed: '340 km/h'
        }
      },
      {
        id: '488-gtb',
        name: '488 GTB',
        brand: 'Ferrari',
        years: [2015, 2016, 2017, 2018, 2019],
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
        specs: {
          engine: '3.9L Twin-Turbo V8',
          power: '661 HP',
          topSpeed: '330 km/h'
        }
      },
      {
        id: 'sf90-stradale',
        name: 'SF90 Stradale',
        brand: 'Ferrari',
        years: [2020, 2021, 2022, 2023],
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
        specs: {
          engine: '4.0L V8 + Electric Motors',
          power: '986 HP',
          topSpeed: '340 km/h'
        }
      }
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: '🚗',
    modelCount: 22,
    available: false,
    models: [
      {
        id: 'huracan',
        name: 'Huracán',
        brand: 'Lamborghini',
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        image: 'https://images.unsplash.com/photo-1544829099-b9ddc1d75344?w=400',
        specs: {
          engine: '5.2L V10',
          power: '630 HP',
          topSpeed: '325 km/h'
        }
      },
      {
        id: 'aventador',
        name: 'Aventador',
        brand: 'Lamborghini',
        years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
        specs: {
          engine: '6.5L V12',
          power: '730 HP',
          topSpeed: '350 km/h'
        }
      }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    logo: '🏎️',
    modelCount: 35,
    available: false,
    models: [
      {
        id: '911-turbo-s',
        name: '911 Turbo S',
        brand: 'Porsche',
        years: [2020, 2021, 2022, 2023],
        image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400',
        specs: {
          engine: '3.8L Twin-Turbo H6',
          power: '640 HP',
          topSpeed: '330 km/h'
        }
      }
    ]
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    logo: '🚙',
    modelCount: 16,
    available: false,
    models: [
      {
        id: 'db11',
        name: 'DB11',
        brand: 'Aston Martin',
        years: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
        specs: {
          engine: '5.2L Twin-Turbo V12',
          power: '630 HP',
          topSpeed: '322 km/h'
        }
      }
    ]
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    logo: '🏁',
    modelCount: 8,
    available: false,
    models: [
      {
        id: 'chiron',
        name: 'Chiron',
        brand: 'Bugatti',
        years: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
        specs: {
          engine: '8.0L Quad-Turbo W16',
          power: '1479 HP',
          topSpeed: '420 km/h'
        }
      }
    ]
  }
]

export const mockManualSections: ManualSection[] = [
  {
    id: 'overview',
    title: 'Vehicle Overview',
    children: [
      { id: 'specifications', title: 'Technical Specifications', content: 'Detailed technical specifications and performance data for this vehicle model.' },
      { id: 'safety', title: 'Safety Features', content: 'Comprehensive overview of safety systems and features.' },
      { id: 'controls', title: 'Controls and Displays', content: 'Guide to all vehicle controls, displays, and interfaces.' }
    ]
  },
  {
    id: 'engine',
    title: 'Engine Systems',
    children: [
      { id: 'engine-overview', title: 'Engine Overview', content: 'Complete engine system documentation and specifications.' },
      { id: 'fuel-system', title: 'Fuel System', content: 'Fuel delivery system, injection, and fuel management.' },
      { id: 'cooling-system', title: 'Cooling System', content: 'Engine cooling system components and maintenance.' },
      { id: 'exhaust-system', title: 'Exhaust System', content: 'Exhaust system layout and performance tuning.' }
    ]
  },
  {
    id: 'transmission',
    title: 'Transmission',
    children: [
      { id: 'gearbox', title: 'Gearbox Systems', content: 'Transmission components and operation procedures.' },
      { id: 'clutch', title: 'Clutch System', content: 'Clutch operation and maintenance procedures.' },
      { id: 'drivetrain', title: 'Drivetrain', content: 'Power delivery systems and differential components.' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Systems',
    children: [
      { id: 'wiring', title: 'Wiring Diagrams', content: 'Complete electrical wiring diagrams and schematics.' },
      { id: 'ecu', title: 'ECU Systems', content: 'Engine control units and electronic management systems.' },
      { id: 'lighting', title: 'Lighting Systems', content: 'Interior and exterior lighting system documentation.' }
    ]
  },
  {
    id: 'chassis',
    title: 'Chassis & Suspension',
    children: [
      { id: 'suspension', title: 'Suspension Components', content: 'Suspension system components and adjustment procedures.' },
      { id: 'brakes', title: 'Brake Systems', content: 'Brake system operation and maintenance procedures.' },
      { id: 'wheels', title: 'Wheels & Tires', content: 'Wheel specifications and tire requirements.' }
    ]
  },
  {
    id: 'bodywork',
    title: 'Bodywork & Interior',
    children: [
      { id: 'panels', title: 'Body Panels', content: 'Body panel removal and installation procedures.' },
      { id: 'interior', title: 'Interior Components', content: 'Interior trim and component service procedures.' },
      { id: 'glass', title: 'Glass & Seals', content: 'Window and seal replacement procedures.' }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance Schedules',
    children: [
      { id: 'routine', title: 'Routine Maintenance', content: 'Regular maintenance schedules and procedures.' },
      { id: 'fluids', title: 'Fluid Specifications', content: 'All fluid types, capacities, and change intervals.' },
      { id: 'troubleshooting', title: 'Troubleshooting', content: 'Common issues and diagnostic procedures.' }
    ]
  }
]
