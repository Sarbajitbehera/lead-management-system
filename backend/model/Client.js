import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['REJECTED', 'FOLLOWUP', 'ONBOARD', 'PENDING', 'CONFIRM' ],
    default: 'PENDING',
  },
  address: {
    type: String,
    trim: true,
  },
  businessType: {
    type: String,
    required: true,
    enum: ['IT', 'Non-IT', 'Educational'],
  },
  offerBudget: {
    type: Number,
    required: true,
  },
  clientType: {
    type: String,
    required: true,
  },
  referredBy: {
    type: String,
    trim: true,
  },
  followUpDate: {
    type: Date,
  },
  confirmDate: {
    type: Date,
  },
  important: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

const Client = mongoose.model('Client', ClientSchema);

export default Client;
