import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'irig0aa7',
  dataset: "production",
  apiVersion: '2023-01-01',
  useCdn: false,
  token: 'skJIJxemgyExGw3sbudK9LgNKqgAOB6oTd9nruRbmzZjFY9UKcZPra3zIXVU6Mmq1Wx5g3i7tU3C0yhKL7c5H6BwyPoTYRTuhua7OggrvmI6ZMj6U0rc7QHx1X39BE0B4cDHUXEUcgaYjUrfUffWIQ7Y2jzV54x2H7oQQorQfewJ3ZE4pGNq',
})