import mongoose from 'mongoose'

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Desk', 'Chair', 'Table', 'Bench', 'Whiteboard', 'Computer', 'Projector', 'Cabinet', 'Bookshelf', 'Fan', 'Other']
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  condition: {
    type: String,
    required: true,
    enum: ['Good', 'Fair', 'Repair Needed'],
    default: 'Good'
  },
  dateOfEntry: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for better query performance
stockSchema.index({ name: 1, category: 1 })
stockSchema.index({ dateOfEntry: -1 })
stockSchema.index({ quantity: 1 })



export default mongoose.model('Stock', stockSchema)