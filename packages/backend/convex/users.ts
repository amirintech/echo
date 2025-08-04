import { v } from 'convex/values'
import { mutation, query } from './_generated/server.js'

export const list = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query('users').collect()
  },
})

export const create = mutation({
  args: { name: v.string(), email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert('users', { name: args.name, email: args.email })
  },
})
