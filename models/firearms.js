const mongoose = require('mongoose');


const FirearmSchema = new mongoose.Schema({
  nickname: { type: String },                  // e.g., "My Hunting Rifle"
  manufacturer: { type: String, required: true }, // e.g., Remington, Glock
  model: { type: String, required: true },        // e.g., 700, 19X
  serialNumber: { type: String, unique: true },   // Unique identifier
  caliber: { type: String, required: true },      // e.g., .308 Win, 9mm
  actionType: { type: String, required: true },   // e.g., Bolt-Action, Semi-Auto, Revolver
  category: { type: String, required: true },     // e.g., Handgun, Rifle, Shotgun
  barrelLength: { type: Number },                 // In inches
  finish: { type: String },                       // e.g., Blued, Cerakote, Stainless
  purchaseDate: { type: Date },
  purchasePrice: { type: Number },
  image: { type: String },                        // URL to an image
  notes: { type: String },
  ownerId: { type: String, required: true }       // For user-specific filtering
}, { timestamps: true });

module.exports = mongoose.model('Firearm', FirearmSchema, 'firearms');