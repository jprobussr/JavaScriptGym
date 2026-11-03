const deliveries = [
  { id: 101, driver: 'Mike', miles: 450, status: 'Delivered' },
  { id: 102, driver: 'Sarah', miles: 275, status: 'Pending' },
  { id: 103, driver: 'James', miles: 620, status: 'Delivered' },
  { id: 104, driver: 'Lisa', miles: 180, status: 'Pending' },
  { id: 105, driver: 'Robert', miles: 510, status: 'Delivered' },
];

const getDeliveries = async () => {
  return deliveries;
};

const displayDeliveries = async () => {
  try {
    const result = await getDeliveries();
    const deliveredOrders = result
      .filter((delivery) => {
        return delivery.status === 'Delivered';
      })
      .map((delivery) => {
        return delivery.driver;
      });

      console.log(deliveredOrders);
  } catch (error) {
    console.log(error.message);
  }
};

displayDeliveries();

// const displayDeliveries = async () => {
//     try {
//         const result = await getDeliveries();
//         const delivery = result.filter((item) => {
//             return item.status === 'Delivered';
//         });
//         console.log(delivery);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// displayDeliveries();
