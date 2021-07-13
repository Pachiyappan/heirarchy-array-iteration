flatenSubAccounts = (r, a) => {
    var b = {};
    Object.keys(a).forEach(function (k) {
        if (k !== 'Children') {
            b[k] = a[k];
        }
    });
    r.push(b);
    if (Array.isArray(a.Children)) {
        b.Children = a.Children.map(function (a) { return a.id; });
        return a.Children.reduce(this.flatenSubAccounts, r);
    }
    return r;
}
data.reduce(flatenSubAccounts , []);