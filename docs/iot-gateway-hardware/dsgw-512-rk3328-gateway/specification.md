# DSGW-512 Smart Apartment Gateway Specification

<div style={{textAlign: 'center'}}>


<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## **1. Product Introduction**

### **1.1. Purpose and Description**

DSGW-512 is a Smart Apartment Gateway that can be easily installed on rails. This product has Ethernet, Zigbee, WiFi functions, and is equipped with RS485 and M-Bus. These universal interfaces allow the gateway to connect various sub devices more conveniently. Furthermore, the product also features 2 separate relays(a total of 8 channels), 1 DI port and 1 AO port, which can control the switch and working status of household appliances based on temperature and other conditions. The product can be widely used in various automation scenarios such as smart Apartment and smart homes.

### **1.2. Product Feature Summary**

- Support 5-30V power input
- Supports WiFi IEEE802.11ac, IEEE802.11a, IEEE802.11n, IEEE802.11g, and IEEE802.11b
- Supports Zigbee
- 1 RJ45 Gigabit Ethernet po
- 1 Analog output (0~10V)
- Two separate relays, a total of 8 channels
- 1 Digital input（5~30V DC)
- Supports connecting 1 NTC
- 1 M-Bus interface
- 1 RS-485 interface
- Support LTE CAT 4(optional)

### **1.3. Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-1.png)

## **2. Mechanical**

### **2.1. Drawing**
The schematic diagram is as follows.<br/>

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-2.png)

### **2.2. Interface**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-3.png)

## **3. Specification**<br/>

### **3.1. Technical Specification**<br/>

| Category      | Specifications                                        |
| ------------- | ----------------------------------------------------- |
| CPU           | RK3328 Quad-core Cortex A53 |
| System        | Debian11 |
| BSP           | Support |
| RAM           | 2GB |
| Flash         | 8GB eMMC |
| Power         | DC 12V input <br />Wide crimping capability for 5-30V input |
| Ethernet      | 1000Mbps(RJ45) x 1 |
| USB           | USB 3.0 x 1 <br />USB 2.0 x 1 |
| RS-485        | RS-485(RJ45) x 1 |
| M-Bus         | M-Bus(Phoenix terminal) x 1 |
| Wireless protocol | Wi-Fi 2.4G/5G <br />Zigbee3.0 |
| Antenna           | Wi-Fi x 1<br /> Zigbee x 1 |
| Relay 1 |  6 relay outputs ，each relay can be controlled individually, one by one <br />Connector： Phoenix terminal <br />Electricity meter: Support <br />Maximum voltage 230V AC <br /> Maximum current per channel 2A |
| Relay 2 |  2 relay outputs ，each relay can be controlled individually, one by one <br />Connector： Phoenix terminal <br />Electricity meter: Support <br />Maximum voltage 230V AC <br /> Maximum current per channel 2A |
| Analog output | AO x 1, 0~10V |
| Digital input | 5~30V DC (DI port is used for dry contacts such as external switches) |
| NTC | Supports connection to 1 external NTC ，the NTC is compatible with NTC 10k |
| LED |  System LED<br /> Network LED<br /> Warning LED<br /> User LED x 3 |
| Reset | Short press to restart the device, long press for 5 seconds to restore factory settings |
| Storage Temperature   | -40℃~85℃ |
| Operating Temperature | 0~55℃     |
| AmbientHumidity       | 10~90% |
| IP rating             | IP30 |
| Cooling               | Heat dissipation ，silicone/aluminum |
| Size                  | 118*90*58mm |


### **3.2 Wi-Fi Performance**

- IEEE Wireless LAN standard: IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE802.11b<br/>
- Data Rate:<br/>
IEEE 802.11b Standard Mode:1,2,5.5,11Mbps<br/>
IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps<br/>
IEEE 802.11n: MCS0 ~ MCS7 @ HT20/ 2.4GHz band MCS0 ~ MCS7 @ HT40/ 2.4GHz band<br/>
MCS0 ~ MCS9 @ HT40/ 5GHz band<br/>
IEEE 802.11ac: MCS0 ~ MCS9 @ VHT80/ 5GHz band<br/>
- Sensitivity:<br/>
VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band<br/>
HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band<br/>
HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band<br/>
- Transmit Power:<br/>
IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band<br/>
IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band<br/>
IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band<br/>
IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band<br/>
IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband<br/>
IEEE 802.11g: 16dBm @54MHz<br/>
IEEE 802.11b: 18dBm @11MHz<br/>
- Wireless Security: WPA/WPA2, WEP, TKIP, and AES<br/>
- Working mode: Sta, AP Client<br/>
- Range: 50 meters maximum, open field<br/>
- Transmit Power:17dBm<br/>
- Frequency offset: +/- 50KHZ<br/>
- Frequency Range (MHz): 2412.0~2483.5<br/>
- Low Frequency (MHz):2400<br/>
- High Frequency (MHz):2483.5<br/>
- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW<br/>
- Bandwidth (MHz):20MHz/40MHz<br/>
- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM<br/>


### **3.3 Zigbee Performance**

- TX Power: 17.5dBm<br/>
- Range: 100 meters maximum, open filed<br/>
- Receiving Sensibility: -94dBm<br/>
- Frequency offset: +/-20KHZ<br/>
- Frequency Range (MHz):2400.0~2483.5<br/>
- Low Frequency (MHz):2400<br/>
- High Frequency (MHz):2483.5<br/>
- E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW<br/>
- Bandwidth (MHz):5MHz<br/>
- Modulation: OQPSK<br/>

### **3.3 LTE Performance**

- LTE-FDD:<br/>
- B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28<br/>
- LTE-TDD: B38/B39/B40/B41<br/>
- WCDMA: B1/B2/B4/B5/B6/B8/B19<br/>
- GSM: B2/B3/B5/B8<br/>

## **4. Accessories**<br/>

### **4.1. Antenna**<br/>

This product is equipped with 2 external antenna for Zigbee and WiFi, as shown below:<br/>
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-4.png)<br/>

### **4.2. Technical Specification**<br/>
#### **4.2.1 Wi-Fi, Zigbee** <br/>

| Category              | Specifications                                               |
| --------------------- | ------------------------------------------------------------ |
| Working Freq(MHz)     | 2400～2500 <br/>5150~5850                                    |
| Gain(dBi)             | 4.5                                                          |
| Line length(mm)       | 1000                                                         |

#### **4.2.2 LTE Technical Specification**<br/>

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-5.png)<br/>

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-6.png)<br/>

## **5. Installation**

Open the locking device, press the upper and lower edges of the internal contour at the back of the gateway against the guide rail, and then push the locking device downwards to secure the gateway onto the guide rail.
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW512/DSGW-512-SPEC-7.png)
