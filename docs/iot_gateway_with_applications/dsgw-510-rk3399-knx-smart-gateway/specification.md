# **DSGK-510 KNX Smart Gateway**

## **1. Product Introduction**

### **1.1 Purpose and Description**

DSGW-510 is a KNX data gateway that can be easily installed on rails. The product has Ethernet, KNX, WiFi, LTE functions, and is equipped with RS485, RS232, M-Bus, and CAN interfaces. Therefore, it can collect data and issue commands through various methods. This product can also be optionally equipped with BLE, ZigBee, and Z-wave modules, further increasing the types and quantities of sub devices that can be connected. The product reserves expansion interfaces, which can externally expand IO and wireless modules, and can achieve various wireless or local bus interface functions. The product can be widely used in various automation scenarios such as smart buildings and smart homes.<br />

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/1.png" width="600" />
</div>

### 1.2. Product Feature Summary

- Support 5-30V power input <br />
- Supports IEEE802.11ac, IEEE802.11a, IEEE802.11n, IEEE802.11g, and IEEE802.11b<br />
- Supports LTE Cat 1/Cat 4<br />
- Optional wireless module, with three options for Bluetooth, ZigBee, and ZWAVE<br />
- 2 RJ45 Gigabit Ethernet ports<br />
- Supports KNX protocol<br />
- Adopting scalable design, the left side of the product can be expanded with wireless modules(Bluetooth, ZigBee, ZWAVE), and the right side can be expanded with IO interface modules

### 1.3. Hardware Block Diagram

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/2.png" width="600" />
</div>
## 2. Mechanical Requirement
### 2.1. Drawing

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/3.png" width="600" />
</div>

### 2.2. Interface

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/4.png" width="600" />
</div>

- The bottom interface is shown below:<br />

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/5.png" width="600" />
</div>

- The top interface is shown below:<br />

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/6.png" width="600" />
</div>

## 3. Specification
### 3.1. Technical Specification
| **Category**             | **Specifications**                                                  |
| :----------------------- | :------------------------------------------------------------------ |
| CPU                      | RK3399,dual-core Cortex-A72 andquad-core Cortex-A53                 |
| SYSTEM                   | Debian 12\Ubuntu18.04\Android10.0\Buildroot+QT                      |
| RAM                      | 4GB DDR3                                                            |
| Flash                    | 32GB  eMMC                                                          |
| Power                    | DC 12V input<br /> Wide crimping capability for 5-30V input         |
| Ethernet                 | 2*100/1000Mbps                                                      |
| USB                      | 2*USB 3.0                                                           |
| Debug                    | PCB support                                                         |
| Wireless protocol        | WiFi 2.4G/5G<br /> Lte Cat1/Cat4 <br /> Wireless (optional): Choose one from Bluetooth, ZIGBEE or Z- WAVE<br />                                                             |
| Antenna                  | WIFI x 1<br />  4G x 1 <br />Wireless (optional) x 1                |
| KNX                      | Support protocol and web UI config (twisted pair, Red and Black KNX Interface)  <br />KNX button |
| LED                      | 1. Power LED: Always on when powered on, off when powered off<br  />2. WIFI LED: Always on when the module is in place, flashing when the terminal is connected, and off when the module is not in place<br  />3. Wireless(optional) LED: Always on when the module is in place, flashing when the terminal is connected, and off when the module is not in place - optional for ZigBee, Z-Wave, and Bluetooth<br  />4. LTE Signal LED: Always on when the module is in place, flashing when connected to the network, and off when the module is not in place<br  />5. KNX LED: The KNX terminal stays on when connected and turns off when disconnected<br  />6. Ethernet LED: Always on after Uplink and off after Down(yellow) |
| Interface                | 1. RS485 x 2 (Phoenix terminal)<br  />2. RS232 x 1(Phoenix terminal)<br  />3. M-Bus (3UL Max) x 1(Phoenix terminal)<br  />4. CAN x 1(Phoenix terminal)<br  />5. HDMI x 1 |
| SIM Slot                 | SIM Card Slot x 1                                                   |
| Expansion Module         | The left side of the product can be expanded with wireless modules(Bluetooth, ZigBee, ZWAVE), and the right side can be expanded with IO interface modules               |
| Reset                    | Short press to restart the device, long press for 5 seconds to restore factory settings |
| Storage Temperature      | -40℃ ~ 85℃                                                        |
| Operating Temperature    | 0 ~ 55℃                                                            |
| Ambient Humidity         | 10 ~ 90%                                                            |
| IP rating                | IP30                                                                |
| Cooling                  | Heat dissipation,silicone/aluminum                                  |
| Size                     | 118*90*58mm                                                         |

### 3.2 Performance Requirement
| **Category**             | **Specifications**                                                  |
| :----------------------- | :------------------------------------------------------------------ |
| Wi-Fi Performance        | 1. IEEE Wireless LAN standard: IEEE802.11ac, IEEE802.11n, IEEE802.11g, IEEE802.11b<br  />2. Data Rate:<br  />IEEE 802.11b Standard Mode:1,2,5.5,11Mbps<br  />IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps<br  />IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band<br  />MCS0~MCS7 @ HT40/ 2.4GHz band<br  />MCS0~MCS9 @ HT40/ 5GHz band<br  />IEEE 802.11ac: MCS0~MCS9 @ VHT80/ 5GHz band<br  />3. Sensitivity:<br  />VHT80 MCS9: -60dBm@10% PER(MCS9) /5GHz band<br  />HT40 MCS9: -63dBm@10% PER(MCS9) /5GHz band<br  />HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band<br  />HT20 MCS7 : -71dBm@10% PER(MCS7) /2.4GHz band<br  />4. Transmit Power:<br  />IEEE 802.11ac: 13dBm @HT80 MCS9 /5GHz band<br  />IEEE 802.11ac: 16dBm @HT80 MCS0 /5GHz band<br  />IEEE 802.11n: 14dBm @HT20/40 MCS7 /5GHz band<br  />IEEE 802.11n: 16dBm @HT20/40 MCS0 /5GHz band<br  />IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband<br  />IEEE 802.11g: 16dBm @54MHz<br  />IEEE 802.11b: 18dBm @11MHz<br  />5. Wireless Security: WPA/WPA2, WEP, TKIP, and AES<br  />6. Working mode: Sta, AP Client<br  />7. Range: 50 meters maximum, open field<br  />8. Transmit Power:17dBm<br  />9. Frequency offset: +/- 50KHZ<br  />10. Frequency Range (MHz): 2412.0~2483.5<br  />11. Low Frequency (MHz):2400<br  />12. High Frequency (MHz):2483.5<br  />13. E.i.r.p (Equivalent Isotopically Radiated power)(mW)<100mW<br  />14. Bandwidth (MHz):20MHz/40MHz<br  />15. Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM<br  />               |
| Bluetooth Performance    | 1. TX Power: 19.5dBm<br  />2. Range: 150 meters maximum, open filed<br  />3. Receiving Sensibility: -92dBm@0.1%BER 1Mbps<br  />4. Frequency offset: +/-20KHZ<br  />5. Frequency Range (MHz):2401.0~2483.5<br  />6. Low Frequency (MHz):2400<br  />7. High Frequency (MHz):2483.5<br  />8. E.i.r.p (Equivalent Isotopically Radiated power)(mW)<10mW<br  />9. Bandwidth (MHz):2MHz<br  />10.Modulation: GFSK<br  /> |
| Zigbee Performance       | 1. TX Power: 17.5dBm<br  />2. Receiving Sensibility: -94dBm<br  />3. Frequency offset: +/-20KHZ<br  />4. Frequency Range (MHz):2400.0~2483.5<br  />5. Low Frequency (MHz):2400<br  />6. High Frequency (MHz):2483.5<br  />7. E.i.r.p (Equivalent Isotopically Radiated power)(mW)<100mW<br  />8. Bandwidth (MHz):5MHz<br  />9. Modulation: OQPSK<br  />10. Range: 100 meters maximum, open filed<br  />                                                              |
| Z-Wave Performance       | 1. TX power up to13dBm(20mW)<br  />2. RX sensitivity: @100kbps-97.5dBm<br  />3. Range: 100 meters maximum, open filed<br  />4. Default Frequency: 916MHz(Different country with different frequency)<br  />                                                           |
| LTE Cat4                 | 1. LTE-FDD:B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28<br  />2. LTE-TDD: B38/B39/B40/B41<br  />3. WCDMA: B1/B2/B4/B5/B6/B8/B19<br  />4. GSM: B2/B3/B5/B8<br  />  |
| LTE Cat1                 | 1. LTE FDD: B2/B4/B5/B12/B13<br  />2. WCDMA:B2/B4/B5<br  />3. LTE FDD Data rate:10(DL)/5(DL)<br  /> |

## 4. Installation
Open the locking device, press the upper and lower edges of the internal contour at the back of the gateway against the guide rail, and then push the locking device downwards to secure the gateway onto the guide rail.<br />

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/7.png" width="600" />
</div>

- Expansion Module：<br />
Align the metal connector of the expansion module with the expansion slot of the host, slowly insert it until it is inserted, and fix the expansion module on the guide rail according to the installation method of the host.<br />
- Step 1<br />
<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/8.png" width="600" />
</div>
- Step 2<br />
<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/Spec/DSGW-510-KNX/9.png" width="600" />
</div>




