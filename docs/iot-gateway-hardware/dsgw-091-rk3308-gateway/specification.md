# **DSGW-091 Smart Ceiling LTE Gateway**

<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## **Model List**

| Model      | Wi-Fi 2.4G/5G | Ethernet      | Bluetooth 5.2 | Zigbee3.0 | Z-Wave    | Lora     |
| ---------- | ------------- | ------------- | ------------- | --------- | --------- | ---------|
| DSGW-091-1 | ●             | ●             | ●             | ●         | ●         | ●        |
| DSGW-091-2 | ●             | ●             | ●             | ●         |           |          |
| DSGW-091-3 | ●             | ●             | ●             | ●         |           |          |
| DSGW-091-4 | ●             | ●             |               | ●         | ●         | ●        |

# **1. Product Introduction**

## **1.1. Purpose and Description**

DSGW-091 is an IoT Linux Gateway with multiple wireless protocols. It provides reliable connectivity 
for a wide range of wireless IoT devices. The gateway’s modular architecture provides the ability to 
customize many gateway features providing an off-the-shelf solution that meets your exact needs. 
Wireless protocol option including Bluetooth, Wi-Fi, Ethernet, USB, ZigBee, Z-wave, LoRa.

## **1.2.Purpose and Description**

- OS: Linux
- USB 5Vtype C Power supply and PoE Power supply
- Processor: Quad-core Cortex-A35 up to 1.3GHz
- RAM:512MB
- eMMC:4GB
- Support IEEE802.11n,IEEE802.11g,IEEE802.11b,IEEE802.11ac Protocol
- Support Z-WAVE
- Support Zigbee3.0
- Support Bluetooth 5.2
- Support Lora
- One WAN/LAN variable network port

## **1.3.Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-091/spec-1.png)


# **2. Mechanical Requirement**

## **2.1.  Drawings**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-091/spec-2.png)
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-091/spec-3.png)

# **3.  Specification**

## **3.1.  Technical Specification**

| Category              | Specifications                                               |
| --------------------- | ------------------------------------------------------------ |
| Power Adapter         | Input:100V~240V AC/50~60HZ Output:5V/3A, USB Type-C          |
| Ethernet              | The network interface supports CAT-5/CAT-5E to transmit data and POE Power Supply (voltage range is 44 ~ 57V). It is WAN/LAN variable. |
| Indicator LEDs        | Power LED normally on when powered on Zigbee/Z-WAVE LED is flash when the signal come WAN LED normally on after connect for 1-2sec                                                    |
| Reset Button          | The reset button is hole button, After pressing the reset button for more than 5 seconds, the Gateway will be restored to the factory settings.                                                   |
| Installation method   | Flat, Ceiling, DIN                                           |
| RTC                   | Real Time Clock operated from on board battery               |
| Operating Temperature | -0℃ ~ 55℃                                                  |
| Storage Temperature   | -40℃ ~ 85℃                                                 |
| Cooling               | Heat dissipation silicone/aluminum                           |
                                                    |

# **3.2 Communication Performance**

### **3.2.1 Wi-Fi Performance**

- IEEE Wireless LAN standard: 
- IEEE802.11ac,IEEE802.11a,IEEE802.11n,IEEE802.11g,IEEE802.11b

- Data Rate:
  - IEEE 802.11b Standard Mode:1,2,5.5,11Mbps
  - IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps 
  - IEEE 802.11n: 
    - MCS0~MCS7 @ HT20/ 2.4GHz band
    - MCS0~MCS7 @ HT40/ 2.4GHz band 
    - MCS0~MCS9 @ HT40/ 5GHz band
  - IEEE 802.11ac: MCS0~MCS9 @ VHT80/ 5GHz band

- Sensitivity:
  - VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band 
  - HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band
  - HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band 
  - HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band

- Transmit Power:
  - IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band 
  - IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band 
  - IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band 
  - IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband 
  - IEEE 802.11g: 16dBm @54MHz
  - IEEE 802.11b: 18dBm @11MHz

- Wireless Security: WPA/WPA2, WEP, TKIP, and AES
- Working mode: Bridge, AP Client
- Range: 50 meters maximum, open field
- Transmit Power:17dBm
- Highest Transmission Rate: 300Mbps
- Frequency offset: +/- 50KHZ
- Frequency Range (MHz): 2412.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW
- Bandwidth (MHz):20MHz/40MHz
- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM


### **3.2.2 Zigbee3.0 Performance**

- TX Power: 19.5dBm
- Range: 100 meters maximum, open filed
- Receiving Sensibility: -94dBm
- Frequency offset: +/-20KHZ

### **3.2.3 BLE Performance**

- TX Power: 19.5dBm
- Range: 150 meters minimum, open filed
- Receiving Sensibility: -80dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz 
- Modulation: GFSK

### **3.2.4 Z-WAVE Performance**

- TX power up to 13dBm
- RX sensitivity: @100kbps -97.5dBm
- Range: 100 meters maximum, open filed
- Default Frequency: 916MHz(Different country with different frequency)

### **3.2.5 LoRa Performance**

- Frequency band support: EU868,US915
- TX power up to 20dBm
- Frequency band support: RU864,IN865,EU868,US915,AU915,KR920,AS923
- TX power upto 27dBm,RX sensitivitydown to -139dBm@SF12,BW125kHz
- Range: 10KM maximum,open field
- Protocol:V1.0 Class A/Class B/Class C and V1.0.2 Class A/Class B/ClassC
- LoRa antenna gain: 3/5dBi optional
- Lora Antenna Type:
- Omnidirectional
- Lora working mode:Full/half-duplex(optional)

### **3.2.6 Ethernet Performance**

- 10/100Mbps
<br />

# **4. QA Requirement**

| **Information Description** | **Standard(Yes) Custom(No)** |
| --------------------------- | ---------------------------- |
| ESD Testing                 | Yes                          |
| RF Antenna Analysis         | Yes                          |
| Environmental Testing       | Yes                          |
| Reliability Testing         | Yes                          |
| Certification               | FCC,CE ,IC, Z-wave plus, RoHs|
