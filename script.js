


// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Sample data for the line chart
//     const data = {
//       labels: ['January', 'February', 'March', 'April', 'May'],
//       datasets: [
//         {
//           label: 'Dataset 1',
//           borderColor: 'rgb(75, 192, 192)',
//           data: [10, 30, 45, 60, 80],
//           fill: false,
//         },
//         {
//           label: 'Dataset 2',
//           borderColor: 'rgb(255, 99, 132)',
//           data: [40, 50, 35, 70, 90],
//           fill: false,
//         },
//       ],
//     };
  
//     // Get the canvas element
//     const ctx = document.getElementById('lineChart').getContext('2d');
  
//     // Create the line chart
//     const lineChart = new Chart(ctx, {
//       type: 'line',
//       data: data,
//       options: {
//         scales: {
//           x: [{
//             scaleLabel: {
//               display: true,
//               labelString: 'Month',
//             },
//           }],
//           y: [{
//             scaleLabel: {
//               display: true,
//               labelString: 'Value',
//             },
//           }],
//         },
//       },
//     });
//   });
  