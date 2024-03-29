# DSGW-380 Industrial AI Edge Computing Gateway

<div style={{textAlign: 'center'}}>

<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#F6940B', color: '#ffffff', padding: '10px 25px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Print</button>

</div>

## Model List
|     Feature     Model    |     Wi-Fi6    |     5G    |     RS232    |     RS485    |     LoRa    |     BLE5.2    |     Ethernet    |
|--------------------------|---------------|-----------|--------------|--------------|-------------|---------------|-----------------|
|     DSGW-380-1           |     ●         |     ●     |     ●        |     ●        |     ●       |     ●         |     ●           |

# 1. Product Introduction

## 1.1. Purpose and Description
The DSGW-380 is an edge computing gateway designed for AI applications based on the RK3588 chip. This chip features an integrated CPU consisting of a quad-core Cortex-A76 alongside a quad-core Cortex-A55 and is further enhanced by a NEON coprocessor. The gateway is also equipped with an NPU (Neural Processing Unit) capable of hybrid operations with INT4, INT8, INT16, and FP16 and offers a computing capacity of up to 6 TOPS. In addition, the DSGW-380 is highly compatible with various neural network models, supporting a range of frameworks such as TensorFlow, MXNet, PyTorch, and Caffe. 

The rugged design with aluminum alloy structure, active fan cooling, rich I/O interfaces, and stable performance make the DSGW-380 highly suitable for various applications. These include robotics, autonomous delivery vehicles, low-altitude security, intelligent detection systems, and smart infrastructure. It is the optimal choice for implementing AI computing capabilities at the edge in deep learning scenarios.

## 1.2. Product Feature Summary 
- Supports 5G, 4G LTE CAT4 and CAT1
- Supports Wi-Fi 6 (IEEE 802.11ax)
- Offers powerful computing performance, providing high-performance processing resources for AI edge computing
- Supports a variety of industrial real-time Ethernet and fieldbus protocols, making it compatible with a wide range of industrial equipment
- Coming with rich I/O interfaces
- Supports ROS robot system
- Supports a variety of deep learning framework software, including TensorFlow, MXNet, PyTorch, and Caffe
- Includes an acceleration SDK based on the open-source YOLOV3 algorithm, which provides a variety of API interfaces
- Supports IoT wireless protocols, including BLE 5.2 and LoRaWAN
- Featuring a fully industrial design, making it rugged and ready for harsh conditions
  
## 1.3. Hardware Block Diagram
![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403070926959.png)

# 2. Mechanical Requirement 

## 2.1. Drawing and Dimension
![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403070936749.png)

## 2.2. Interface
![](https://dusunprj.oss-us-west-1.aliyuncs.com/202403070941479.png)

# 3. Specification

## 3.1. Technical Specification
|     Technical Specification    |                                                                                                                                                                                                                                                |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     CPU                        |     RK3588 Quad-core ARM Cortex-A76   and Quad-core ARM Cortex-A55                                                                                                                                                                             |
|     System                     |     Debian   11                                                                                                                                                                                                                                |
|     RAM                        |     8   GB LPDDR4                                                                                                                                                                                                                              |
|     Storage                    |     Up   to 128 GB eMMC                                                                                                                                                                                                                        |
|     Power Supply               |     Input:   DC 12V/4A                                                                                                                                                                                                                         |
|     Indicator LEDs             |     The Power LED remains GREEN when   the device is on.      The 5G LED flashes BLUE when   functioning correctly.      The Wi-Fi LED flashes BLUE when   operating properly.      The LoRa LED remains BLUE when   functioning correctly.    |
|     Reset Button               |     Factory reset button. To reset   the Gateway to its original factory settings, press and hold it for more than   10 seconds                                                                                                                |
|     I/O Port                   |     IO1/IO2 DI DO AI                                                                                                                                                                                                                           |
|     Ethernet                   |     2   * RJ45 Gigabit                                                                                                                                                                                                                         |
|     SIM Card Slot              |     1   * SIM Card Slot                                                                                                                                                                                                                        |
|     Antenna                    |     1*BLE, 4*LTE(5G), 1*LoRa, 2*Wi-Fi(2.4G/5G)                                                                                                                                                                                                 |
|     RS232                      |     1*RS232                                                                                                                                                                                                                                    |
|     RS485                      |     1*RS485                                                                                                                                                                                                                                    |
|     CAN                        |     1                                                                                                                                                                                                                                          |
|     HDMI                       |     2                                                                                                                                                                                                                                          |
|     USB   Port                 |     2*USB   3.0                                                                                                                                                                                                                                |
|     OTG   2.0                  |     USB   Type C                                                                                                                                                                                                                               |
|     Installation               |     DIN-Rail,   Wall Mounting                                                                                                                                                                                                                  |
|     Protection   Rating        |     IP 30                                                                                                                                                                                                                                      |
|     Shell   Material           |     Aluminum   alloy                                                                                                                                                                                                                           |
|     Storage   Temperature      |     -40℃~85℃                                                                                                                                                                                                                                   |
|     Operating   Temperature    |     -25℃~75℃                                                                                                                                                                                                                                   |
|     Ambient   Humidity         |     5~95%                                                                                                                                                                                                                                      |

## 3.2. Performance Requirement
<!--<table>
<thead>
  <tr>
    <th colspan="2">Performance Requirement</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Wi-Fi Performance</td>
    <td>WLAN Standard：<br>IEEE 802.11b/g/n/ax, CSMA/CA<br>Frequency Range 2.4~2.4835GHz (2.4GHz ISM Band) Channels Ch1~Ch13 (For 20MHz Channels)<br>Modulation:<br>802.11b (DSSS): CCK, DQPSK, DBPSK;<br>802.11g (OFDM): BPSK, QPSK, QAM16, QAM64;<br>802.11n (OFDM): BPSK, QPSK, QAM16, QAM64;<br>802.11ax (OFDMA): BPSK, BPSK_DCM, QPSK, QPSK_DCM, QAM16, QAM16_DCM, QAM64, QAM256, QAM1024;<br>802.11b: 1, 2, 5.5, 11Mbps;<br>802.11g: 6, 9, 12, 18, 24, 36, 48, 54Mbps;<br>802.11n (HT20): MCS0~MCS7(1T1R_SISO) 6.5~72.2Mbps;<br>802.11n (HT20): MCS8~MCS15(2T2R_MIMO) 13~144.4Mbps;<br>802.11n (HT40): MCS0~MCS7(1T1R) 13.5~150Mbps;<br>802.11n (HT40): MCS8~MCS15(2T2R) 27~300Mbps;<br>802.11ax (HE_MU,26~242RU): MCS0~MCS11(1T1R) 0.4~143.4Mbps;<br>802.11ax (HE_MU,26~242RU): MCS0~MCS11(2T2R) 0.8~286.8Mbps;<br>802.11ax(HE_SU,non-OFDMA20MHz):MCS0~MCS11(1T1R)3.6~143.4Mbps;<br>802.11ax(HE_SU,non-OFDMA20MHz):MCS0~MCS11(2T2R)   7.3~286.8Mbps;<br>802.11ax(HE_SU,non-OFDMA40MHz):MCS0~MCS11(1T1R)   7.3~286.8Mbps;<br>802.11ax(HE_SU,non-OFDMA40MHz):MCS0~MCS11(2T2R)14.6~573.5Mbps;<br>Frequency Tolerance：≦±15ppm<br>Frequency Range：<br>5.15~5.25GHz; 5.25~5.35GHz; 5.47~5.73GHz;<br>5.735~5.835GHz (5GHz ISM Band)<br>Channels：<br>Ch36, Ch40, Ch44, Ch48; Ch52~Ch64<br>Ch100~Ch140; Ch149~Ch165 (For 20MHz Channels)<br>Modulation：<br>802.11a (OFDM): BPSK, QPSK, QAM16, QAM64;<br>802.11n (OFDM): BPSK, QPSK, QAM16, QAM64;<br>802.11ac (OFDM): BPSK, QPSK, QAM16, QAM64, QAM256;<br>802.11ax (OFDMA): BPSK, BPSK_DCM, QPSK, QPSK_DCM, QAM16, QAM16_DCM, QAM64, QAM256, QAM1024;<br>Date Rate：<br>802.11a: 6, 9, 12, 18, 24, 36, 48, 54Mbps<br>802.11n (HT20): MCS0~MCS7(1T1R_SISO) 6.5~72.2Mbps<br>802.11n (HT20): MCS8~MCS15(2T2R_MIMO) 13~144.4Mbps<br>802.11n (HT40): MCS0~MCS7(1T1R) 13.5~150Mbps<br>802.11n (HT40): MCS8~MCS15(2T2R) 27~300Mbps<br>802.11ac (VHT20): MCS0~MCS8(1T1R) 6.5~86.7Mbps<br>802.11ac (VHT20): MCS0~MCS8(2T2R) 13~173.3Mbps<br>802.11ac (VHT40): MCS0~MCS9(1T1R)13.5~200Mbps<br>802.11ac (VHT40): MCS0~MCS9(2T2R)27~400Mbps<br>802.11ac (VHT80): MCS0~MCS9(1T1R)29.3~433.3Mbps<br>802.11ac (VHT80): MCS0~MCS9(2T2R)58.5~866.7Mbps<br>802.11ax (HE_MU,26~484RU): MCS0~MCS11(1T1R) 0.4~286.8Mbps<br>802.11ax (HE_MU,26~484RU): MCS0~MCS11(2T2R) 0.8~573.5Mbps<br>802.11ax (HE_SU,non-OFDMA 20MHz): MCS0~MCS11(1T1R) 3.6~143.4Mbps<br>802.11ax (HE_SU,non-OFDMA 20MHz): MCS0~MCS11(2T2R) 7.3~286.8Mbps<br>802.11ax (HE_SU,non-OFDMA 40MHz): MCS0~MCS11(1T1R) 7.3~286.8Mbps<br>802.11ax (HE_SU,non-OFDMA40MHz):MCS0~MCS11(2T2R) 14.6~573.5Mbps<br>802.11ax (HE_SU,non-OFDMA80MHz):MCS0~MCS11(1T1R) 15.3~600.4Mbps<br>802.11ax (HE_SU,non-OFDMA80MHz):  MCS0~MCS11(2T2R) 30.6~1201Mbps</td>
  </tr>
  <tr>
    <td> <br>Bluetooth Performance</td>
    <td>•         TX Power: 19.5dBm<br>•         Range: 150 meters minimum, open filed<br>•         Receiving Sensibility: -80dBm@0.1%BER<br>•         Frequency offset: +/-20KHZ<br>•         Frequency Range (MHz):2401.0~2483.5<br>•         Low Frequency (MHz):2400<br>•         High Frequency (MHz):2483.5<br>•         E.i.r.p (Equivalent Isotopically Radiated power) (mW)&lt;10mW<br>•         Bandwidth (MHz):2MHz<br>•         Modulation: GFSK</td>
  </tr>
  <tr>
    <td>5G RM500Q-CN/<br>RM500Q-AE/RM502QAE/<br>RM505Q-AE</td>
    <td>•         5G SA Sub-6: Max. 2.1Gbps (DL)/ Max. 900Mbps (UL)<br>•         5G NSA Sub-6: Max. 2.5Gbps (DL)/Max. 525/550Mbps (UL)<br>•         5G SA Sub-6: Max. 2.1Gbps (DL)/Max. 450Mbps (UL)(RM500Q-AE/<br>RM505Q-AE); Max. 4.2Gbps (DL)/Max. 450Mbps (UL)(RM502Q-AE)<br>•         5G NSA Sub-6: Max. 2.5Gbps (DL)/Max. 650Mbps (UL)(RM500Q-AE/<br>RM505Q-AE); Max. 5.0Gbps (DL)/Max. 650Mbps (UL)(RM502Q-AE)<br>•         LTE-FDD: Max. 1Gbps (DL)/Max. 200Mbps (UL)<br>•         LTE-FDD: Max. 1Gbps (DL)/Max. 200Mbps (UL)<br>(RM500Q-AE/RM505Q-AE)<br>•         LTE-FDD: Max. 2Gbps (DL)/Max. 200Mbps (UL) (RM502Q-AE)<br>5G NR: n1/n28/n41/n78/n79<br>•         LTE-FDD: B1/B3/B5/B8<br>•         LTE-TDD: B34/B38/B39/B40/B41<br>•         WCDMA: B1/B8<br>•         5GNR:n1/n2/n3/n5/n7/n8/n12/n20/n25/n28/n38/n40/n41/n48/n66/n71/n77/n78/n79<br>•         LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12(B17)/B13/B14/B18/B19/B20/B25/B26/B28/B29/B30/B32/B66/B71<br>•         LTE-TDD: B34/B38/39/B40/B41/B42/B43/B4</td>
  </tr>
</tbody>
</table>-->

# 4. QA Requirements
|     Information Description    |     Standard(Yes) Custom(No)    |
|--------------------------------|---------------------------------|
|     ESD   Testing              |     Yes                         |
|     RF   Antenna Analysis      |     Yes                         |
|     Environmental   Testing    |     Yes                         |
|     Reliability   Testing      |     Yes                         |
|     Certification              |     FCC, CE,   SRRC             |
