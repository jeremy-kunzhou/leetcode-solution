
var MyCalendar = function () {
  this.events = []
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function (start, end) {
  return this.segmentTree(start, end)
};

MyCalendar.prototype.segmentTree = function (start, end) {
  const e = [start, end - 1]
  let index = 0;
  if (this.events.length > 0) {
    index = this.find(e, 0, this.events.length - 1)
  }
  if (index == -1) return false;
  this.events.splice(index, 0, e)
  return true
};

MyCalendar.prototype.find = function (e, l, r) {
  const m = (r + l) / 2 >>> 0

  if (m == l) {
    return e[1] < this.events[l][0] ? l :
      e[0] > this.events[r][1] ? r + 1 :
        e[0] > this.events[l][1] && e[1] < this.events[r][0] ? r : -1
  }
  return e[0] < this.events[m][0] ? this.find(e, l, m) : this.find(e, m, r)
}


MyCalendar.prototype.bruteforce = function (start, end) {
  const newE = [...this.events]
  newE.push([start, end])
  newE.sort((a, b) => a[1] - b[1])
  let result = true
  for (let i = 1; i < newE.length; i++) {
    if (newE[i][0] < newE[i - 1][1]) {
      result = false;
      break;
    }
  }
  if (result) {
    this.events = [...newE]
  }
  return result
};

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/