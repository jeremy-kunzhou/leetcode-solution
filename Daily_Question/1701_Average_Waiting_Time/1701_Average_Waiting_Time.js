/**
 * @param {number[][]} customers
 * @return {number}
 * intuition:
 * simulate the whole events
 */
var averageWaitingTime = function (customers) {
  let currTime = 0
  let waitingSum = 0
  for (const customer of customers) {
    if (currTime == 0) {
      currTime = customer[0]
    } else {
      currTime = Math.max(customer[0], currTime)
    }
    // waiting time = currTime + timePrepare - timeCustomerCame
    waitingSum += currTime + customer[1] - customer[0]
    // update currTime indicated that the chef is free at this
    currTime += customer[1]
  }
  return waitingSum / customers.length
};