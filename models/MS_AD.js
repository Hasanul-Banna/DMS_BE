const mongoose = require("mongoose");

const MSADSettingsSchema = mongoose.Schema(
  {
    smtp_server: {
      type: String,
      required: true,
    },
    port_number_default_25: {
      type: String,
      required: true,
    },
    from_address: {
      type: String,
      required: true,
    },
    use_secure_transport: {
      type: String,
      required: true,
    },
    use_authentication: {
      type: String,
      required: true,
    },
    authentication_user_id: {
      type: String,
      required: true,
    },
    authentication_password: {
      type: String,
      required: true,
    },
    azure_tenant: {
      type: String,
      required: true,
    },
    app_id: {
      type: String,
      required: true,
    },
    app_secret: {
      type: String,
      required: true,
    },
    client_id: {
      type: String,
      required: true,
    },
    start_hour_24h: {
      type: String,
      required: true,
    },
    start_minute: {
      type: String,
      required: true,
    },
    last_synchronization: {
      type: String,
      required: true,
    },
    isActivate: {
      type: Boolean,
      required: true,
    },
    isIncludeDomain: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = microsoft_ad = mongoose.model(
  "microsoft_ad",
  MSADSettingsSchema
);
