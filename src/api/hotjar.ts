// @ts-nocheck
export const initHotjar = () => {
    console.log("initializing hotjar");
    (function(h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function() {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = { hjid: 1627577, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
        console.log("finished initializing hotjar");
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};
