ZPool = function () {
    this.objects = {};
    ZPool.Inst = this;
    return this
};
ZPool.prototype.Fill = function (b, e, a) {


    if (this.objects[b] == undefined) {
        this.objects[b] = []
    }
    for (var c = 0; c < e; c++) {
        var d = a();
        d.poolName = b;
        this.objects[b].push(d)
    }
};
ZPool.prototype.Pop = function (a) {
    if (this.objects[a] == undefined) {
        console.warn("Error: not found '" + a + "' in pool.");
        return undefined
    }
    if (this.objects[a].length == 0) {
        console.warn("Error: pool empty. Element '" + a + "'");
        return undefined
    }
    return this.objects[a].pop()
};

ZPool.prototype.Size = function (a) {
    if (this.objects[a] == undefined) return 0; else
        return   this.objects[a].length;
}

ZPool.prototype.Push = function (a) {
    if (a.poolName == undefined) {
        console.warn("Error: Can't push unnamed element in pool.");
        return
    }
    this.objects[a.poolName].push(a)
};