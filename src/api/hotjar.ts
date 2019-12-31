export const initHotjar = () => {
    console.log("initializing hotjar");
    (function(h, o, t, j, a, r) {
        // @ts-ignore
        h.hj =
        // @ts-ignore
        h.hj ||
        function() {
            // @ts-ignore
            (h.hj.q = h.hj.q || []).push(arguments);
        };
        // @ts-ignore
        h._hjSettings = { hjid: 1627577, hjsv: 6 };
        // @ts-ignore
        a = o.getElementsByTagName("head")[0];
        // @ts-ignore
        r = o.createElement("script");
        // @ts-ignore
        r.async = 1;
        // @ts-ignore
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        // @ts-ignore
        a.appendChild(r);
        console.log("finished initilizing hotjar");
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};
