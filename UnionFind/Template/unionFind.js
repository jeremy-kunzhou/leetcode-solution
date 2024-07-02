class UnionFind {
  constructor(emails) {
    this.par = new Map()
    this.rank = new Map()
    for (let i = 0; i < emails.length; i++) {
      this.par.set(emails[i], emails[i])
      this.rank.set(emails[i], 0)
    }
  }

  find(email) {
    let p = this.par.get(email)
    while (p != this.par.get(p)) {
      this.par.set(p, this.par.get(this.par.get(p)))
      p = this.par.get(p)
    }
    return p
  }

  union(e1, e2) {
    const [p1, p2] = [this.find(e1), this.find(e2)]
    if (p1 == p2) {
      return false
    }

    if (this.rank.get(p1) > this.rank.get(p2)) {
      this.par.set(p2, p1)
    } else if (this.rank.get(p1) < this.rank.get(p2)) {
      this.par.set(p1, p2)
    } else {
      this.par.set(p2, p1)
      this.rank.set(p1, this.rank.get(p1) + 1)
    }
    return true
  }
}