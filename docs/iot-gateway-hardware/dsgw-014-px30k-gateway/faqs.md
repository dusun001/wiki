# FAQs of DSGW-014 Gateway Hardware Development  
## LoRaWAN & Bluetooth  
Q: Can the LoRa gateway DSGW-014 scan for Bluetooth beacons and simultaneously transmit the data back to the cloud? I'm asking because these two functions can be considered different modes of operation, where the gateway would need to save the scanned data and transmit it to the cloud at a later time.  
A: Yes, DSGW-014 can support both LoRaWAN and Bluetooth data uplink simultaneously. These two types of data are uploaded through separate channels, allowing the gateway to scan for Bluetooth beacons and transmit the data to the cloud independently. Please note that the gateway can handle these operations concurrently without the need to save and transmit the data at a later time.
