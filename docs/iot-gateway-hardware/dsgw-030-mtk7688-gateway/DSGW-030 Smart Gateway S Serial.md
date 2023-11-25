# **DSGW-030 **Smart Gateway S Serial****

# **Model List**

**Category A ( In Stock, Lead Time: 1~2 Weeks )**

| Feature     Model | RAM  | Flash | Wi-Fi   2.4G | Bluetooth   5.2 | Zigbee3.0 | Z-Wave |
| ----------------- | ---- | ----- | ------------ | --------------- | --------- | ------ |
| DSGW-030-1        | 64MB | 16MB  | ●            |                 | ●         |        |
| DSGW-030-2        | 64MB | 16MB  | ●            | ●               |           |        |
| DSGW-030-4        | 64MB | 16MB  | ●            | ●               | ●         |        |
| DSGW-030-5        | 64MB | 16MB  | ●            |                 | ●         | ●      |

**Category C (Built by Order , Lead Time More Than 8 Weeks , MOQ: 500 )**

| Feature     Model | RAM  | Flash | Wi-Fi   2.4G | Bluetooth   5.2 | Zigbee3.0 | Z-Wave |
| ----------------- | ---- | ----- | ------------ | --------------- | --------- | ------ |
| DSGW-030-1        | 64MB | 16MB  | ●            |                 | ●         |        |
| DSGW-030-2        | 64MB | 16MB  | ●            | ●               |           |        |
| DSGW-030-4        | 64MB | 16MB  | ●            | ●               | ●         |        |
| DSGW-030-5        | 64MB | 16MB  | ●            |                 | ●         | ●      |

# **1. Product Introduction**

## **1.1 Purpose and Description**

DSGW-030 is specifically designed for the IoT developer to customize the firmware logic. The developer can build custom firmware from the bottom layer of the hardware. It aims to accelerate IoT Gateway development with pre-integrated, comprehensive, and fully documented out-of-the-box guidance and support.

Serving various industries such as smart homes, intelligent security, and pension services, the Smart Gateway S Series is a versatile gateway. As a central device, it features multiple wireless protocols, including Wi-Fi2.4G, Zigbee 3.0, BLE5.2 and Z-Wave.

**1.2.  Product Feature Summary**

* Operating System (OS): OpenWrt
* Processor: MTK7688AN (MIPS24KEc at 580MHz)
* RAM: 64MB Available Space: 16MB (Development space for the user)
* Flash Storage: 16MB
* Supports IEEE802.11n, IEEE802.11g, IEEE 802.11b protocols
* Supports Bluetooth 5.2, Zigbee3.0, Wi-Fi 2.4G, Z-Wave

**1.3. Hardware Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211645896.png)

# **2. Mechanical Requirement**

## **2.1 Drawing**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211647063.png)

## **2.2. Interface and Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211648831.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211649366.png)

# **3. Specification**

## **3.1 Technical Specification**

| **Category**          | **Specifications**                                           |
| --------------------- | ------------------------------------------------------------ |
| CPU                   | MT7688AN                                                     |
| System                | OpenWrt                                                      |
| RAM                   | 64MB                                                         |
| Flash                 | 16MB                                                         |
| Interface             | 1 * 10/100 Mbps WLAN/LAN variable port  1 * Micro USB port   |
| Indicator LEDs        | •      The Zigbee/BLE LED flashes when a signal is  received.  •      The Network LED indicates RED when  no  establishing a network connection.  •      The  Network LED indicates GREEN when a network connection is established. |
| Power Supply          | •      Input:100V~240V AC/50~60HZ  •      Output:5V/1A, Micro USB |
| Reset                 | Factory  reset button. To reset the Gateway to its original factory settings, press  and hold it for more than 10 seconds |
| Installation          | Flat, Ceiling                                                |
| Weight                | TBD                                                          |
| Operating Temperature | -10℃~55℃                                                     |
| Operating humidity    | 10%~90%                                                      |
| IP Rating             | IP 22                                                        |

## **3.2 Communication Performance**

### **3.2.1 Wi-Fi Performance**

- IEEE Wireless LAN standard: IEEE802.11n, IEEE802.11g, IEEE802.11b

- Data Rate：

  - IEEE 802.11b Standard Mode:1,2,5.5,11Mbps

  - IEEE 802.11g Standard Mode:6,9,12,18,24,36,48,54 Mbps 

  - IEEE 802.11n: MCS0~MCS7 @ HT20/ 2.4GHz band

    ​                         MCS0~MCS7 @ HT40/ 2.4GHz band 

- Sensitivity:

  * HT40 MCS7: -70dBm@10% PER(MCS7) /2.4GHz band 
  * HT20 MCS7: -71dBm@10% PER(MCS7) /2.4GHz band

- Transmit Power:

  IEEE 802.11n: 16dBm @HT20/40 MCS7 /2.4GHzband 

  IEEE 802.11g: 16dBm @54MHz

  IEEE 802.11b: 18dBm@11MHz

- Wireless Security: WPA/WPA2, WEP, TKIP, and AES

- Working mode: Bridge、AP Client

- Range: 50 meters maximum, open field

- Transmit Power: 17dBm

- Highest Transmission Rate: 300Mbps

- Frequency offset: +/- 50KHZ

- Frequency Range (MHz): 2412.0~2483.5

- Low Frequency (MHz): 2400

- High Frequency (MHz): 2483.5

- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 100mW

- Bandwidth (MHz):20MHz/40MHz

- Modulation: BPSK/QPSK, FHSSCCK/DSSS, 64QAM/OFDM

### **3.2.2 Bluetooth Performance**

- TX Power: 19.5dBm
- Range: 150 meters minimum, open filed
- Receiving Sensibility: -80dBm@0.1%BER
- Frequency offset: +/-20KHZ
- Frequency Range (MHz):2401.0~2483.5
- Low Frequency (MHz):2400
- High Frequency (MHz):2483.5
- E.i.r.p (Equivalent Isotopically Radiated power) (mW) < 10mW
- Bandwidth (MHz):2MHz Modulation: GFSK

### **3.2.3 Zigbee Performance**

* Range: 100 meters maximum, open field
* Transmit Power:17.5dBm
* Highest Transmission Rate: 250Kbps
* Frequency offset: +/- 20KHZ
* Receiving Sensibility:-94dBm
* Frequency Range (MHz):2401.0~2483.5
* Low Frequency (MHz):2400
* High Frequency (MHz):2483.5
* E.i.r.p (Equivalent Isotopically Radiated power) (mW)<100mW
* Bandwidth (MHz):5MHz
* Modulation: OQPSK

# **4. QA Requirement**

| **Information Description** | **Standard(Yes) Custom(No)** |
| --------------------------- | ---------------------------- |
| ESD Testing                 | Yes                          |
| RF Antenna Analysis         | Yes                          |
| Environmental Testing       | Yes                          |
| Reliability Testing         | Yes                          |
| Certification               | FCC,CE                       |

# **5. Software Requirements**

This software is built on the MTK platform and runs on the OpenWrt system. It supports Wi-Fi, Zigbee 3.0, BLE5.2, Z-Wave, OTA, and MQTT.

## **5.1 Definitions**

### **5.1.1.   Boot Up**

Upon power insertion, both the green and yellow LEDs light up. Once the yellow LED turns off and the green LED starts blinking and remains lit, the gateway has successfully booted up.

### **5.1.2.   Reset**

Press and hold the button for 10 seconds to perform a reset. This will erase all matched information.

### **5.1.3.   LED Indicators**

Green LED: Indicates system startup.

Yellow LED: Signals operation of Zigbee/Z-Wave. When the gateway communicates with a sensor, this LED blinks. If the gateway enters pairing mode, the LED will blink as well.

Red LED: Used to indicate connectivity with the cloud. If the gateway connects successfully, the Red LED turns off. If the connection fails, it remains lit.

### **5.1.4.   Wi-Fi Configuration**

The Wi-Fi supports both AP and client modes, which can be switched as needed. The name of the AP: xxxxxxx. Password: xxxxxxx.

### **5.1.5.   Zigbee Configuration**

The Zigbee stack, version 3.0, supports ZHA, GreenPower, ZLL, and more. It is compatible with most clusters of ZigBee devices, such as door sensors, leak sensors, motion sensors, temperature and humidity sensors, smart plugs, smart lamps, smoke sensors, curtains, and so on. Devices can be added via the web or command.

### **5.1.6.   BLE Configuration**

The gateway supports iBeacon, Eddystone, BLE sensors, and the SIG mesh function.

### **5.1.7.   OTA**

The gateway's firmware can be upgraded over the network.

### **5.1.8.   MQTT**

The gateway supports the MQTT protocol for cloud connectivity.

# **6. Application**

| Application NO | Function Introduction                                    | Model Name                 |
| -------------- | -------------------------------------------------------- | -------------------------- |
| AP-01          | Work with Beacon for Indoor   Positioning                | DSGW-030-2                 |
| AP-02          | Manage, monitor and control   smart household appliances | DSGW-030-1      DSGW-030-3 |
| AP-03          | SIG Mesh                                                 | DSGW-030-2                 |

## **6.1.  AP-01 Beacons for Indoor Guidance and Location**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211714229.png)

Beacons attached to the assets to be tracked emit BLE signals, which are received by the Smart Gateway installed within the building. The Gateway processes this data and sends it to a server via Wi-Fi or Ethernet. The positions of the assets are then displayed on a map, and motion statistics can be retrieved

## **6.2.  AP-02 Smart Home IoT**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211716826.png)

The Smart Gateway serves as the smart home’s brain, connecting wirelessly with a wide range of smart devices and enabling them to work together seamlessly.

Key features of the Smart Gateway include:

*  Control lights, electronics, and small appliances from anywhere, providing convenient remote access.
*  Schedule devices to turn on and off at different times of the day, automating routines and enhancing energy efficiency.
* Receive alerts when there is an unexpected activity in your home, ensuring you stay informed and aware of any potential security concerns.
* Set connected lights to turn on and off based on people's presence, creating a more responsive and intuitive lighting experience.
* Monitor moisture and temperature levels, allowing you to keep track of environmental conditions within your home.

With its versatile functionality, the Smart Gateway empowers you to manage your smart home effortlessly and enjoy a more connected and comfortable living environment.

**6.3.  AP-04 SIG Mesh**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211717924.png)

Bluetooth is emerging as a formidable contender to become the preeminent short-range technology for connecting edge nodes in a capillary network. Introducing mesh functionality to Bluetooth allows low-power sensors to communicate with remote capillary gateways, which can be incorporated in any Bluetooth-enabled handset.

 

Bluetooth mesh offers a variety of network configuration options based on the deployment characteristics and application requirements. The impact of these configurations scales with the network size and data throughput. Configuration possibilities include enabling the relay feature, opting for acknowledged or unacknowledged transmissions, setting message repetition schemes, and employing transmission randomization.

 

In an effort to support standardization, validate implementation recommendations, and evaluate the performance of a Bluetooth mesh network comprised of hundreds of devices, we conducted a comprehensive stack implementation of the Bluetooth Mesh Profile using a system-level simulator

# **7.  What’s in the Box**

| Item          | Quantity | Note |
| ------------- | -------- | ---- |
| Gayeway       | 1        |      |
| Network Cable | 1        |      |
| Adapter       | 1        |      |

# **8.  Certification List**

| NO   | Certificate Title | Abstract                           |                             |
| ---- | ----------------- | ---------------------------------- | --------------------------- |
| 1    | Zigbee            | Zigbee alliance                    | Figure 1 Zigbee Certificate |
| 2    | BQB               | Bluetooth TCRL 2019-1              | Figure 2 BQB Certificate    |
| 3    | CE                | Healthy, Safety                    | Figure 3 CE Certificate     |
| 5    | TCB               | Frequency2412.0 – 2462.0           | Figure 4 FCC(DTS-TC956050)  |
| 6    | FCC               | Frequency 2402.0/2405.0 -   2480.0 | Figure 5 FCC(DXX-TC171366)  |
| 7    | Canada IC         | Technical Acceptance   Certificate | Figure 6 Canada IC          |
| 8    | KC                |                                    | Figure 7 KC                 |

## **Zigbee**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211722539.png)

## **BQB**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211723939.png)

## **CE**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211725788.png)

## **FCC**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211726629.png)

## **Canada IC**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211726783.png)

## **KC**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/202311211727203.png)