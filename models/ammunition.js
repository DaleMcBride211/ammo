const mongoose = require('mongoose');

const AmmunitionSchema = new mongoose.Schema({
  caliber: { type: String, required: true },
  bulletWeight: { type: Number, required: true }, // Grains
  bulletType: { type: String, required: true },   // e.g., ELD-X, FMJ, JHP
  brand: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  category: { type: String, required: true },    // e.g., Handgun, MSR, Bolt Action
  muzzleVelocity: { type: Number },              // FPS
  lotNumber: { type: String },
  notes: { type: String },
  ownerId: { type: String, required: true }      // For user-specific filtering
}, { timestamps: true });

// Exporting as 'Ammunition' and forcing collection name 'ammunition'
module.exports = mongoose.model('Ammunition', AmmunitionSchema, 'ammunition');