var charity = {
    $ready: [],
    digitalData: {
        sysEnv: {
            siteCode: 'sjo',
            environment: 'prod'
        },
        page: {
            path: '#',
            pageName: '#',
            version: '',
            type: 'article',
            language: 'english'
        },
        user: {
            userName: 'anonymous'
        }
    }
};

function trackingPixelLoad() {
    if (typeof (ns_rum) !== "undefined") {
        ns_rum.onPerceivedLoad();
    }
};

charity.$ready.push(function ($) {


    var authorRunMode = false;



    charity.shared.toolbox.init($, authorRunMode);
});

(window.BOOMR_mq = window.BOOMR_mq || []).push(["addVar", {
    "rua.upush": "false",
    "rua.cpush": "false",
    "rua.upre": "false",
    "rua.cpre": "false",
    "rua.uprl": "false",
    "rua.cprl": "false",
    "rua.cprf": "false",
    "rua.trans": "",
    "rua.cook": "false",
    "rua.ims": "false",
    "rua.ufprl": "false",
    "rua.cfprl": "false",
    "rua.isuxp": "false",
    "rua.texp": "norulematch"
}]);

! function (e) {
    var n = "https://s.go-mpulse.net/boomerang/";
    if ("False" == "True") e.BOOMR_config = e.BOOMR_config || {}, e.BOOMR_config.PageParams = e.BOOMR_config.PageParams || {}, e.BOOMR_config.PageParams.pci = !0, n = "https://s2.go-mpulse.net/boomerang/";
    if (window.BOOMR_API_key = "Q4JE7-49MJV-CAJHF-BRTJA-QBWEK", function () {
        function e() {
            if (!o) {
                var e = document.createElement("script");
                e.id = "boomr-scr-as", e.src = window.BOOMR.url, e.async = !0, i.parentNode.appendChild(e), o = !0
            }
        }

        function t(e) {
            o = !0;
            var n, t, a, r, d = document,
                O = window;
            if (window.BOOMR.snippetMethod = e ? "if" : "i", t = function (e, n) {
                var t = d.createElement("script");
                t.id = n || "boomr-if-as", t.src = window.BOOMR.url, BOOMR_lstart = (new Date).getTime(), e = e || d.body, e.appendChild(t)
            }, !window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]\./)) return window.BOOMR.snippetMethod = "s", void t(i.parentNode, "boomr-async");
            a = document.createElement("IFRAME"), a.src = "about:blank", a.title = "", a.role = "presentation", a.loading = "eager", r = (a.frameElement || a).style, r.width = 0, r.height = 0, r.border = 0, r.display = "none", i.parentNode.appendChild(a);
            try {
                O = a.contentWindow, d = O.document.open()
            } catch (_) {
                n = document.domain, a.src = "javascript:var d=document.open();d.domain='" + n + "';void(0);", O = a.contentWindow, d = O.document.open()
            }
            if (n) d._boomrl = function () {
                this.domain = n, t()
            }, d.write("<bo" + "dy onload='document._boomrl();'>");
            else if (O._boomrl = function () {
                t()
            }, O.addEventListener) O.addEventListener("load", O._boomrl, !1);
            else if (O.attachEvent) O.attachEvent("onload", O._boomrl);
            d.close()
        }

        function a(e) {
            window.BOOMR_onload = e && e.timeStamp || (new Date).getTime()
        }
        if (!window.BOOMR || !window.BOOMR.version && !window.BOOMR.snippetExecuted) {
            window.BOOMR = window.BOOMR || {}, window.BOOMR.snippetStart = (new Date).getTime(), window.BOOMR.snippetExecuted = !0, window.BOOMR.snippetVersion = 12, window.BOOMR.url = n + "Q4JE7-49MJV-CAJHF-BRTJA-QBWEK";
            var i = document.currentScript || document.getElementsByTagName("script")[0],
                o = !1,
                r = document.createElement("link");
            if (r.relList && "function" == typeof r.relList.supports && r.relList.supports("preload") && "as" in r) window.BOOMR.snippetMethod = "p", r.href = window.BOOMR.url, r.rel = "preload", r.as = "script", r.addEventListener("load", e), r.addEventListener("error", function () {
                t(!0)
            }), setTimeout(function () {
                if (!o) t(!0)
            }, 3e3), BOOMR_lstart = (new Date).getTime(), i.parentNode.appendChild(r);
            else t(!1);
            if (window.addEventListener) window.addEventListener("load", a, !1);
            else if (window.attachEvent) window.attachEvent("onload", a)
        }
    }(), "250".length > 0)
        if (e && "performance" in e && e.performance && "function" == typeof e.performance.setResourceTimingBufferSize) e.performance.setResourceTimingBufferSize(250);
    ! function () {
        if (BOOMR = e.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) {
            var n = "" == "true" ? 1 : 0,
                t = "",
                a = "m7dikoqxfydxszpoei3q-f-76d76cf71-clientnsv4-s.akamaihd.net",
                i = "false" == "true" ? 2 : 1,
                o = {
                    "ak.v": "36",
                    "ak.cp": "594350",
                    "ak.ai": parseInt("370575", 10),
                    "ak.ol": "0",
                    "ak.cr": 18,
                    "ak.ipv": 4,
                    "ak.proto": "h2",
                    "ak.rid": "94b68d1",
                    "ak.r": 16179,
                    "ak.a2": n,
                    "ak.m": "a",
                    "ak.n": "essl",
                    "ak.bpcip": "103.198.133.0",
                    "ak.cport": 54146,
                    "ak.gh": "23.57.76.19",
                    "ak.quicv": "",
                    "ak.tlsv": "tls1.3",
                    "ak.0rtt": "",
                    "ak.csrc": "-",
                    "ak.acc": "",
                    "ak.t": "1710105143",
                    "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==1NqSW4tzxkPhkDCfxI2HcrOeL0+Zic3JHmD+D7qYNUfJew67W8DvSHqFjEz+k6Rauh3MahaydMchdk8M5EoeDVEUhlYaVUzugQr3xz8r0kd/KIl7tgidoeem12rP6pCQ0EyXCV5gtV3GOseffKg8zjbmtnhbrfQXyCPV6iPaUHq0Il0Z4v6MLnZsFYq7VZ7p+z1lUu89yhskvLNBQNRhDTVAHcRtLvD/odUA0ocZ+GH+P/dloWyzvXplJMUh7jlP9fu9VGDzrOGq+hKmhYq63mFTVy6L8VztWTNaB82OGiXO8XTB9hRLxfth0PmXiXnEjNh1PzXY00OlgsFYSydLBuR1hoxwsRMJIi6nIrC8eguEIwoUxXTn9nadjsTlFNWba0nXpKkoV88BXN4dQvUmuhPe4HI+ILwGXDq1XANGjsA=",
                    "ak.pv": "54",
                    "ak.dpoabenc": "",
                    "ak.tf": i
                };
            if ("" !== t) o["ak.ruds"] = t;
            var r = {
                i: !1,
                av: function (n) {
                    var t = "http.initiator";
                    if (n && (!n[t] || "spa_hard" === n[t])) o["ak.feo"] = void 0 !== e.aFeoApplied ? 1 : 0, BOOMR.addVar(o)
                },
                rv: function () {
                    var e = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.r", "ak.acc", "ak.t", "ak.tf"];
                    BOOMR.removeVar(e)
                }
            };
            BOOMR.plugins.AK = {
                akVars: o,
                akDNSPreFetchDomain: a,
                init: function () {
                    if (!r.i) {
                        var e = BOOMR.subscribe;
                        e("before_beacon", r.av, null, null), e("onbeacon", r.rv, null, null), r.i = !0
                    }
                    return this
                },
                is_complete: function () {
                    return !0
                }
            }
        }
    }()
}(window);

charity.$ready.push(function ($) {
    var nodeId = '91f14aa8d9b79919f9cceb9e8768e280b4fb249fbd5fac278c419e78cb0f3537';
    var options = [];
    options["isEditMode"] = "false";
    charity.shared.column.init($, nodeId, options);
});

(function ($) {
    $('.share-facebook').on('click', function (e) {
        $.ajaxSetup({
            cache: true
        });
        $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
            e.preventDefault();
            FB.init({
                appId: '575997725836682',
                xfbml: false,
                version: 'v2.12'
            });
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.likes',
                action_properties: JSON.stringify({
                    object: location.href,
                })
            }, function (response) { });
        });
    });
})(charity.$);