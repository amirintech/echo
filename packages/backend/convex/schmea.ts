import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export const schema = defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
  }),
})