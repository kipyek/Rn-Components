export { default } from "./Graphs";


// //Run yarn add react-native-chart-kit
// import React from 'react';

// import {
//   Text,
//   View,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import {
//   LineChart,
// } from 'react-native-chart-kit';


// const MyBezierLineChart = () => {
//   return (
//     <>
//     <Text style= { styles.header } > Bezier Line Chart < /Text>
//       < LineChart
//   data = {{
//     labels: ['January', 'February', 'March', 'April'],
//       datasets: [
//         {
//           data: [
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//           ],
//         },
//       ],
//         }
// }
// width = { Dimensions.get('window').width - 16 } // from react-native
// height = { 220}
// yAxisLabel = { 'Rs'}
// chartConfig = {{
//   backgroundColor: '#1cc910',
//     backgroundGradientFrom: '#eff3ff',
//       backgroundGradientTo: '#efefef',
//         decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//     borderRadius: 16,
//           },
// }}
// bezier
// style = {{
//   marginVertical: 8,
//     borderRadius: 16,
//         }}
// />
//   < />
//   );
// };




// const Kpi = () => {
//   return (
//     <View style= { styles.container } >
//     <View>
//     <MyBezierLineChart />
//     < /View>
//     < /View>
//   );
// }
// export default Kpi;

// const styles = StyleSheet.create({
//   maincontainer: { padding: 10, backgroundColor: 'white', height: '100%' },
//   // thisweektitle:{ }
// })