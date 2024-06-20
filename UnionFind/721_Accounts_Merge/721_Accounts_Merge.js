/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
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

var accountsMerge = function (accounts) {

  const emailSet = new Set()
  const emailName = new Map()
  const edgeArr = []
  accounts.forEach(e => {
    let emails = e.slice(1)
    emails.forEach(e1 => {
      emailSet.add(e1);
      edgeArr.push([emails[0], e1])
      emailName.set(e1, e[0])
    })
  })
  const emailArray = [...emailSet.values()]

  const uf = new UnionFind(emailArray)
  edgeArr.forEach(e => {
    uf.union(e[0], e[1])
  })
  const emailResultMap = new Map()
  emailArray.forEach(e => {
    let par = uf.find(e)
    if (!emailResultMap.has(par)) {
      emailResultMap.set(par, [])
    }
    emailResultMap.get(par).push(e)
  })

  const res = [...emailResultMap.keys()].map(key => {
    return [
      emailName.get(key),
      ...[...emailResultMap.get(key)].sort()
    ]
  })
  return res

};