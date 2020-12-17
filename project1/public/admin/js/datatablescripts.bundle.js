!(function (n) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function (t) {
              return n(t, window, document);
          })
        : "object" == typeof exports
        ? (module.exports = function (t, e) {
              return (
                  t || (t = window),
                  e ||
                      (e =
                          "undefined" != typeof window
                              ? require("jquery")
                              : require("jquery")(t)),
                  n(e, t, t.document)
              );
          })
        : n(jQuery, window, document);
})(function (P, m, S, j) {
    function o(e) {
        var n,
            a,
            r = {};
        P.each(e, function (t) {
            (n = t.match(/^([^A-Z]+?)([A-Z])/)) &&
                -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") &&
                ((a = t.replace(n[0], n[2].toLowerCase())),
                (r[a] = t),
                "o" === n[1] && o(e[t]));
        }),
            (e._hungarianMap = r);
    }
    function D(e, n, a) {
        var r;
        e._hungarianMap || o(e),
            P.each(n, function (t) {
                (r = e._hungarianMap[t]) === j ||
                    (!a && n[r] !== j) ||
                    ("o" === r.charAt(0)
                        ? (n[r] || (n[r] = {}),
                          P.extend(!0, n[r], n[t]),
                          D(e[r], n[r], a))
                        : (n[r] = n[t]));
            });
    }
    function y(t) {
        var e = qt.defaults.oLanguage,
            n = t.sZeroRecords;
        !t.sEmptyTable &&
            n &&
            "No data available in table" === e.sEmptyTable &&
            Pt(t, t, "sZeroRecords", "sEmptyTable"),
            !t.sLoadingRecords &&
                n &&
                "Loading..." === e.sLoadingRecords &&
                Pt(t, t, "sZeroRecords", "sLoadingRecords"),
            t.sInfoThousands && (t.sThousands = t.sInfoThousands),
            (t = t.sDecimal) && Bt(t);
    }
    function _(t) {
        if (
            (ue(t, "ordering", "bSort"),
            ue(t, "orderMulti", "bSortMulti"),
            ue(t, "orderClasses", "bSortClasses"),
            ue(t, "orderCellsTop", "bSortCellsTop"),
            ue(t, "order", "aaSorting"),
            ue(t, "orderFixed", "aaSortingFixed"),
            ue(t, "paging", "bPaginate"),
            ue(t, "pagingType", "sPaginationType"),
            ue(t, "pageLength", "iDisplayLength"),
            ue(t, "searching", "bFilter"),
            "boolean" == typeof t.sScrollX &&
                (t.sScrollX = t.sScrollX ? "100%" : ""),
            "boolean" == typeof t.scrollX &&
                (t.scrollX = t.scrollX ? "100%" : ""),
            (t = t.aoSearchCols))
        )
            for (var e = 0, n = t.length; e < n; e++)
                t[e] && D(qt.models.oSearch, t[e]);
    }
    function T(t) {
        ue(t, "orderable", "bSortable"),
            ue(t, "orderData", "aDataSort"),
            ue(t, "orderSequence", "asSorting"),
            ue(t, "orderDataType", "sortDataType");
        var e = t.aDataSort;
        "number" == typeof e && !P.isArray(e) && (t.aDataSort = [e]);
    }
    function w(t) {
        if (!qt.__browser) {
            var e = {};
            qt.__browser = e;
            var n = P("<div/>")
                    .css({
                        position: "fixed",
                        top: 0,
                        left: -1 * P(m).scrollLeft(),
                        height: 1,
                        width: 1,
                        overflow: "hidden",
                    })
                    .append(
                        P("<div/>")
                            .css({
                                position: "absolute",
                                top: 1,
                                left: 1,
                                width: 100,
                                overflow: "scroll",
                            })
                            .append(
                                P("<div/>").css({ width: "100%", height: 10 })
                            )
                    )
                    .appendTo("body"),
                a = n.children(),
                r = a.children();
            (e.barWidth = a[0].offsetWidth - a[0].clientWidth),
                (e.bScrollOversize =
                    100 === r[0].offsetWidth && 100 !== a[0].clientWidth),
                (e.bScrollbarLeft = 1 !== Math.round(r.offset().left)),
                (e.bBounding = !!n[0].getBoundingClientRect().width),
                n.remove();
        }
        P.extend(t.oBrowser, qt.__browser),
            (t.oScroll.iBarWidth = qt.__browser.barWidth);
    }
    function n(t, e, n, a, r, o) {
        var i,
            l = !1;
        for (n !== j && ((i = n), (l = !0)); a !== r; )
            t.hasOwnProperty(a) &&
                ((i = l ? e(i, t[a], a, t) : t[a]), (l = !0), (a += o));
        return i;
    }
    function C(t, e) {
        var n = qt.defaults.column,
            a = t.aoColumns.length;
        n = P.extend({}, qt.models.oColumn, n, {
            nTh: e || S.createElement("th"),
            sTitle: n.sTitle ? n.sTitle : e ? e.innerHTML : "",
            aDataSort: n.aDataSort ? n.aDataSort : [a],
            mData: n.mData ? n.mData : a,
            idx: a,
        });
        t.aoColumns.push(n),
            ((n = t.aoPreSearchCols)[a] = P.extend(
                {},
                qt.models.oSearch,
                n[a]
            )),
            x(t, a, P(e).data());
    }
    function x(t, e, n) {
        e = t.aoColumns[e];
        var a = t.oClasses,
            r = P(e.nTh);
        if (!e.sWidthOrig) {
            e.sWidthOrig = r.attr("width") || null;
            var o = (r.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            o && (e.sWidthOrig = o[1]);
        }
        n !== j &&
            null !== n &&
            (T(n),
            D(qt.defaults.column, n),
            n.mDataProp !== j && !n.mData && (n.mData = n.mDataProp),
            n.sType && (e._sManualType = n.sType),
            n.className && !n.sClass && (n.sClass = n.className),
            n.sClass && r.addClass(n.sClass),
            P.extend(e, n),
            Pt(e, n, "sWidth", "sWidthOrig"),
            n.iDataSort !== j && (e.aDataSort = [n.iDataSort]),
            Pt(e, n, "aDataSort"));
        var i = e.mData,
            l = k(i),
            s = e.mRender ? k(e.mRender) : null;
        n = function (t) {
            return "string" == typeof t && -1 !== t.indexOf("@");
        };
        (e._bAttrSrc =
            P.isPlainObject(i) && (n(i.sort) || n(i.type) || n(i.filter))),
            (e._setter = null),
            (e.fnGetData = function (t, e, n) {
                var a = l(t, e, j, n);
                return s && e ? s(a, e, t, n) : a;
            }),
            (e.fnSetData = function (t, e, n) {
                return p(i)(t, e, n);
            }),
            "number" != typeof i && (t._rowReadObject = !0),
            t.oFeatures.bSort ||
                ((e.bSortable = !1), r.addClass(a.sSortableNone)),
            (t = -1 !== P.inArray("asc", e.asSorting)),
            (n = -1 !== P.inArray("desc", e.asSorting)),
            e.bSortable && (t || n)
                ? t && !n
                    ? ((e.sSortingClass = a.sSortableAsc),
                      (e.sSortingClassJUI = a.sSortJUIAscAllowed))
                    : !t && n
                    ? ((e.sSortingClass = a.sSortableDesc),
                      (e.sSortingClassJUI = a.sSortJUIDescAllowed))
                    : ((e.sSortingClass = a.sSortable),
                      (e.sSortingClassJUI = a.sSortJUI))
                : ((e.sSortingClass = a.sSortableNone),
                  (e.sSortingClassJUI = ""));
    }
    function H(t) {
        if (!1 !== t.oFeatures.bAutoWidth) {
            var e = t.aoColumns;
            bt(t);
            for (var n = 0, a = e.length; n < a; n++)
                e[n].nTh.style.width = e[n].sWidth;
        }
        ("" !== (e = t.oScroll).sY || "" !== e.sX) && pt(t),
            kt(t, null, "column-sizing", [t]);
    }
    function N(t, e) {
        var n = I(t, "bVisible");
        return "number" == typeof n[e] ? n[e] : null;
    }
    function u(t, e) {
        var n = I(t, "bVisible");
        return -1 !== (n = P.inArray(e, n)) ? n : null;
    }
    function v(t) {
        var n = 0;
        return (
            P.each(t.aoColumns, function (t, e) {
                e.bVisible && "none" !== P(e.nTh).css("display") && n++;
            }),
            n
        );
    }
    function I(t, n) {
        var a = [];
        return (
            P.map(t.aoColumns, function (t, e) {
                t[n] && a.push(e);
            }),
            a
        );
    }
    function i(t) {
        var e,
            n,
            a,
            r,
            o,
            i,
            l,
            s,
            u,
            c = t.aoColumns,
            f = t.aoData,
            d = qt.ext.type.detect;
        for (e = 0, n = c.length; e < n; e++)
            if (((u = []), !(l = c[e]).sType && l._sManualType))
                l.sType = l._sManualType;
            else if (!l.sType) {
                for (a = 0, r = d.length; a < r; a++) {
                    for (
                        o = 0, i = f.length;
                        o < i &&
                        (u[o] === j && (u[o] = R(t, o, e, "type")),
                        (s = d[a](u[o], t)) || a === d.length - 1) &&
                        "html" !== s;
                        o++
                    );
                    if (s) {
                        l.sType = s;
                        break;
                    }
                }
                l.sType || (l.sType = "string");
            }
    }
    function A(t, e, n, a) {
        var r,
            o,
            i,
            l,
            s,
            u,
            c = t.aoColumns;
        if (e)
            for (r = e.length - 1; 0 <= r; r--) {
                var f = (u = e[r]).targets !== j ? u.targets : u.aTargets;
                for (P.isArray(f) || (f = [f]), o = 0, i = f.length; o < i; o++)
                    if ("number" == typeof f[o] && 0 <= f[o]) {
                        for (; c.length <= f[o]; ) C(t);
                        a(f[o], u);
                    } else if ("number" == typeof f[o] && f[o] < 0)
                        a(c.length + f[o], u);
                    else if ("string" == typeof f[o])
                        for (l = 0, s = c.length; l < s; l++)
                            ("_all" == f[o] || P(c[l].nTh).hasClass(f[o])) &&
                                a(l, u);
            }
        if (n) for (r = 0, t = n.length; r < t; r++) a(r, n[r]);
    }
    function F(t, e, n, a) {
        var r = t.aoData.length,
            o = P.extend(!0, {}, qt.models.oRow, {
                src: n ? "dom" : "data",
                idx: r,
            });
        (o._aData = e), t.aoData.push(o);
        for (var i = t.aoColumns, l = 0, s = i.length; l < s; l++)
            i[l].sType = null;
        return (
            t.aiDisplayMaster.push(r),
            (e = t.rowIdFn(e)) !== j && (t.aIds[e] = o),
            (n || !t.oFeatures.bDeferRender) && g(t, r, n, a),
            r
        );
    }
    function L(n, t) {
        var a;
        return (
            t instanceof P || (t = P(t)),
            t.map(function (t, e) {
                return (a = s(n, e)), F(n, a.data, e, a.cells);
            })
        );
    }
    function R(t, e, n, a) {
        var r = t.iDraw,
            o = t.aoColumns[n],
            i = t.aoData[e]._aData,
            l = o.sDefaultContent,
            s = o.fnGetData(i, a, { settings: t, row: e, col: n });
        if (s === j)
            return (
                t.iDrawError != r &&
                    null === l &&
                    (Rt(
                        t,
                        0,
                        "Requested unknown parameter " +
                            ("function" == typeof o.mData
                                ? "{function}"
                                : "'" + o.mData + "'") +
                            " for row " +
                            e +
                            ", column " +
                            n,
                        4
                    ),
                    (t.iDrawError = r)),
                l
            );
        if ((s !== i && null !== s) || null === l || a === j) {
            if ("function" == typeof s) return s.call(i);
        } else s = l;
        return null === s && "display" == a ? "" : s;
    }
    function a(t, e, n, a) {
        t.aoColumns[n].fnSetData(t.aoData[e]._aData, a, {
            settings: t,
            row: e,
            col: n,
        });
    }
    function c(t) {
        return P.map(t.match(/(\\.|[^\.])+/g) || [""], function (t) {
            return t.replace(/\\\./g, ".");
        });
    }
    function k(r) {
        if (P.isPlainObject(r)) {
            var o = {};
            return (
                P.each(r, function (t, e) {
                    e && (o[t] = k(e));
                }),
                function (t, e, n, a) {
                    var r = o[e] || o._;
                    return r !== j ? r(t, e, n, a) : t;
                }
            );
        }
        if (null === r)
            return function (t) {
                return t;
            };
        if ("function" == typeof r)
            return function (t, e, n, a) {
                return r(t, e, n, a);
            };
        if (
            "string" == typeof r &&
            (-1 !== r.indexOf(".") ||
                -1 !== r.indexOf("[") ||
                -1 !== r.indexOf("("))
        ) {
            var l = function (t, e, n) {
                var a, r;
                if ("" !== n)
                    for (var o = 0, i = (r = c(n)).length; o < i; o++) {
                        if (((n = r[o].match(ce)), (a = r[o].match(fe)), n)) {
                            if (
                                ((r[o] = r[o].replace(ce, "")),
                                "" !== r[o] && (t = t[r[o]]),
                                (a = []),
                                r.splice(0, o + 1),
                                (r = r.join(".")),
                                P.isArray(t))
                            )
                                for (o = 0, i = t.length; o < i; o++)
                                    a.push(l(t[o], e, r));
                            t =
                                "" === (t = n[0].substring(1, n[0].length - 1))
                                    ? a
                                    : a.join(t);
                            break;
                        }
                        if (a) (r[o] = r[o].replace(fe, "")), (t = t[r[o]]());
                        else {
                            if (null === t || t[r[o]] === j) return j;
                            t = t[r[o]];
                        }
                    }
                return t;
            };
            return function (t, e) {
                return l(t, e, r);
            };
        }
        return function (t) {
            return t[r];
        };
    }
    function p(a) {
        if (P.isPlainObject(a)) return p(a._);
        if (null === a) return function () {};
        if ("function" == typeof a)
            return function (t, e, n) {
                a(t, "set", e, n);
            };
        if (
            "string" == typeof a &&
            (-1 !== a.indexOf(".") ||
                -1 !== a.indexOf("[") ||
                -1 !== a.indexOf("("))
        ) {
            var s = function (t, e, n) {
                var a;
                a = (n = c(n))[n.length - 1];
                for (var r, o, i = 0, l = n.length - 1; i < l; i++) {
                    if (((r = n[i].match(ce)), (o = n[i].match(fe)), r)) {
                        if (
                            ((n[i] = n[i].replace(ce, "")),
                            (t[n[i]] = []),
                            (a = n.slice()).splice(0, i + 1),
                            (r = a.join(".")),
                            P.isArray(e))
                        )
                            for (o = 0, l = e.length; o < l; o++)
                                s((a = {}), e[o], r), t[n[i]].push(a);
                        else t[n[i]] = e;
                        return;
                    }
                    o && ((n[i] = n[i].replace(fe, "")), (t = t[n[i]](e))),
                        (null !== t[n[i]] && t[n[i]] !== j) || (t[n[i]] = {}),
                        (t = t[n[i]]);
                }
                a.match(fe)
                    ? t[a.replace(fe, "")](e)
                    : (t[a.replace(ce, "")] = e);
            };
            return function (t, e) {
                return s(t, e, a);
            };
        }
        return function (t, e) {
            t[a] = e;
        };
    }
    function h(t) {
        return re(t.aoData, "_aData");
    }
    function l(t) {
        (t.aoData.length = 0),
            (t.aiDisplayMaster.length = 0),
            (t.aiDisplay.length = 0),
            (t.aIds = {});
    }
    function f(t, e, n) {
        for (var a = -1, r = 0, o = t.length; r < o; r++)
            t[r] == e ? (a = r) : t[r] > e && t[r]--;
        -1 != a && n === j && t.splice(a, 1);
    }
    function r(n, a, t, e) {
        var r,
            o = n.aoData[a],
            i = function (t, e) {
                for (; t.childNodes.length; ) t.removeChild(t.firstChild);
                t.innerHTML = R(n, a, e, "display");
            };
        if ("dom" !== t && ((t && "auto" !== t) || "dom" !== o.src)) {
            var l = o.anCells;
            if (l)
                if (e !== j) i(l[e], e);
                else for (t = 0, r = l.length; t < r; t++) i(l[t], t);
        } else o._aData = s(n, o, e, e === j ? j : o._aData).data;
        if (
            ((o._aSortData = null),
            (o._aFilterData = null),
            (i = n.aoColumns),
            e !== j)
        )
            i[e].sType = null;
        else {
            for (t = 0, r = i.length; t < r; t++) i[t].sType = null;
            d(n, o);
        }
    }
    function s(t, e, n, a) {
        var r,
            o,
            i,
            l = [],
            s = e.firstChild,
            u = 0,
            c = t.aoColumns,
            f = t._rowReadObject,
            d =
                ((a = a !== j ? a : f ? {} : []),
                function (t, e) {
                    if ("string" == typeof t) {
                        var n = t.indexOf("@");
                        -1 !== n &&
                            ((n = t.substring(n + 1)),
                            p(t)(a, e.getAttribute(n)));
                    }
                }),
            h = function (t) {
                (n !== j && n !== u) ||
                    ((o = c[u]),
                    (i = P.trim(t.innerHTML)),
                    o && o._bAttrSrc
                        ? (p(o.mData._)(a, i),
                          d(o.mData.sort, t),
                          d(o.mData.type, t),
                          d(o.mData.filter, t))
                        : f
                        ? (o._setter || (o._setter = p(o.mData)),
                          o._setter(a, i))
                        : (a[u] = i)),
                    u++;
            };
        if (s)
            for (; s; )
                ("TD" != (r = s.nodeName.toUpperCase()) && "TH" != r) ||
                    (h(s), l.push(s)),
                    (s = s.nextSibling);
        else for (s = 0, r = (l = e.anCells).length; s < r; s++) h(l[s]);
        return (
            (e = e.firstChild ? e : e.nTr) &&
                (e = e.getAttribute("id")) &&
                p(t.rowId)(a, e),
            { data: a, cells: l }
        );
    }
    function g(t, e, n, a) {
        var r,
            o,
            i,
            l,
            s,
            u = t.aoData[e],
            c = u._aData,
            f = [];
        if (null === u.nTr) {
            for (
                r = n || S.createElement("tr"),
                    u.nTr = r,
                    u.anCells = f,
                    r._DT_RowIndex = e,
                    d(t, u),
                    l = 0,
                    s = t.aoColumns.length;
                l < s;
                l++
            )
                (i = t.aoColumns[l]),
                    ((o = n
                        ? a[l]
                        : S.createElement(i.sCellType))._DT_CellIndex = {
                        row: e,
                        column: l,
                    }),
                    f.push(o),
                    (n && !i.mRender && i.mData === l) ||
                        (P.isPlainObject(i.mData) &&
                            i.mData._ === l + ".display") ||
                        (o.innerHTML = R(t, e, l, "display")),
                    i.sClass && (o.className += " " + i.sClass),
                    i.bVisible && !n
                        ? r.appendChild(o)
                        : !i.bVisible && n && o.parentNode.removeChild(o),
                    i.fnCreatedCell &&
                        i.fnCreatedCell.call(
                            t.oInstance,
                            o,
                            R(t, e, l),
                            c,
                            e,
                            l
                        );
            kt(t, "aoRowCreatedCallback", null, [r, c, e]);
        }
        u.nTr.setAttribute("role", "row");
    }
    function d(t, e) {
        var n = e.nTr,
            a = e._aData;
        if (n) {
            var r = t.rowIdFn(a);
            r && (n.id = r),
                a.DT_RowClass &&
                    ((r = a.DT_RowClass.split(" ")),
                    (e.__rowc = e.__rowc ? se(e.__rowc.concat(r)) : r),
                    P(n)
                        .removeClass(e.__rowc.join(" "))
                        .addClass(a.DT_RowClass)),
                a.DT_RowAttr && P(n).attr(a.DT_RowAttr),
                a.DT_RowData && P(n).data(a.DT_RowData);
        }
    }
    function b(t) {
        var e,
            n,
            a,
            r,
            o,
            i = t.nTHead,
            l = t.nTFoot,
            s = 0 === P("th, td", i).length,
            u = t.oClasses,
            c = t.aoColumns;
        for (s && (r = P("<tr/>").appendTo(i)), e = 0, n = c.length; e < n; e++)
            (o = c[e]),
                (a = P(o.nTh).addClass(o.sClass)),
                s && a.appendTo(r),
                t.oFeatures.bSort &&
                    (a.addClass(o.sSortingClass),
                    !1 !== o.bSortable &&
                        (a
                            .attr("tabindex", t.iTabIndex)
                            .attr("aria-controls", t.sTableId),
                        Ct(t, o.nTh, e))),
                o.sTitle != a[0].innerHTML && a.html(o.sTitle),
                Mt(t, "header")(t, a, o, u);
        if (
            (s && B(t.aoHeader, i),
            P(i).find(">tr").attr("role", "row"),
            P(i).find(">tr>th, >tr>td").addClass(u.sHeaderTH),
            P(l).find(">tr>th, >tr>td").addClass(u.sFooterTH),
            null !== l)
        )
            for (e = 0, n = (t = t.aoFooter[0]).length; e < n; e++)
                ((o = c[e]).nTf = t[e].cell),
                    o.sClass && P(o.nTf).addClass(o.sClass);
    }
    function O(t, e, n) {
        var a,
            r,
            o,
            i,
            l = [],
            s = [],
            u = t.aoColumns.length;
        if (e) {
            for (n === j && (n = !1), a = 0, r = e.length; a < r; a++) {
                for (
                    l[a] = e[a].slice(), l[a].nTr = e[a].nTr, o = u - 1;
                    0 <= o;
                    o--
                )
                    !t.aoColumns[o].bVisible && !n && l[a].splice(o, 1);
                s.push([]);
            }
            for (a = 0, r = l.length; a < r; a++) {
                if ((t = l[a].nTr))
                    for (; (o = t.firstChild); ) t.removeChild(o);
                for (o = 0, e = l[a].length; o < e; o++)
                    if (((i = u = 1), s[a][o] === j)) {
                        for (
                            t.appendChild(l[a][o].cell), s[a][o] = 1;
                            l[a + u] !== j && l[a][o].cell == l[a + u][o].cell;

                        )
                            (s[a + u][o] = 1), u++;
                        for (
                            ;
                            l[a][o + i] !== j &&
                            l[a][o].cell == l[a][o + i].cell;

                        ) {
                            for (n = 0; n < u; n++) s[a + n][o + i] = 1;
                            i++;
                        }
                        P(l[a][o].cell).attr("rowspan", u).attr("colspan", i);
                    }
            }
        }
    }
    function M(t) {
        var e = kt(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 !== P.inArray(!1, e)) dt(t, !1);
        else {
            e = [];
            var n = 0,
                a = t.asStripeClasses,
                r = a.length,
                o = t.oLanguage,
                i = t.iInitDisplayStart,
                l = "ssp" == Wt(t),
                s = t.aiDisplay;
            (t.bDrawing = !0),
                i !== j &&
                    -1 !== i &&
                    ((t._iDisplayStart = l
                        ? i
                        : i >= t.fnRecordsDisplay()
                        ? 0
                        : i),
                    (t.iInitDisplayStart = -1));
            i = t._iDisplayStart;
            var u = t.fnDisplayEnd();
            if (t.bDeferLoading) (t.bDeferLoading = !1), t.iDraw++, dt(t, !1);
            else if (l) {
                if (!t.bDestroying && !X(t)) return;
            } else t.iDraw++;
            if (0 !== s.length)
                for (o = l ? t.aoData.length : u, l = l ? 0 : i; l < o; l++) {
                    var c = s[l],
                        f = t.aoData[c];
                    if ((null === f.nTr && g(t, c), (c = f.nTr), 0 !== r)) {
                        var d = a[n % r];
                        f._sRowStripe != d &&
                            (P(c).removeClass(f._sRowStripe).addClass(d),
                            (f._sRowStripe = d));
                    }
                    kt(t, "aoRowCallback", null, [c, f._aData, n, l]),
                        e.push(c),
                        n++;
                }
            else
                (n = o.sZeroRecords),
                    1 == t.iDraw && "ajax" == Wt(t)
                        ? (n = o.sLoadingRecords)
                        : o.sEmptyTable &&
                          0 === t.fnRecordsTotal() &&
                          (n = o.sEmptyTable),
                    (e[0] = P("<tr/>", { class: r ? a[0] : "" }).append(
                        P("<td />", {
                            valign: "top",
                            colSpan: v(t),
                            class: t.oClasses.sRowEmpty,
                        }).html(n)
                    )[0]);
            kt(t, "aoHeaderCallback", "header", [
                P(t.nTHead).children("tr")[0],
                h(t),
                i,
                u,
                s,
            ]),
                kt(t, "aoFooterCallback", "footer", [
                    P(t.nTFoot).children("tr")[0],
                    h(t),
                    i,
                    u,
                    s,
                ]),
                (a = P(t.nTBody)).children().detach(),
                a.append(P(e)),
                kt(t, "aoDrawCallback", "draw", [t]),
                (t.bSorted = !1),
                (t.bFiltered = !1),
                (t.bDrawing = !1);
        }
    }
    function W(t, e) {
        var n = t.oFeatures,
            a = n.bFilter;
        n.bSort && _t(t),
            a
                ? $(t, t.oPreviousSearch)
                : (t.aiDisplay = t.aiDisplayMaster.slice()),
            !0 !== e && (t._iDisplayStart = 0),
            (t._drawHold = e),
            M(t),
            (t._drawHold = !1);
    }
    function E(t) {
        var e = t.oClasses,
            n = P(t.nTable),
            a = ((n = P("<div/>").insertBefore(n)), t.oFeatures),
            r = P("<div/>", {
                id: t.sTableId + "_wrapper",
                class: e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter),
            });
        (t.nHolding = n[0]),
            (t.nTableWrapper = r[0]),
            (t.nTableReinsertBefore = t.nTable.nextSibling);
        for (
            var o, i, l, s, u, c, f = t.sDom.split(""), d = 0;
            d < f.length;
            d++
        ) {
            if (((o = null), "<" == (i = f[d]))) {
                if (((l = P("<div/>")[0]), "'" == (s = f[d + 1]) || '"' == s)) {
                    for (u = "", c = 2; f[d + c] != s; ) (u += f[d + c]), c++;
                    "H" == u
                        ? (u = e.sJUIHeader)
                        : "F" == u && (u = e.sJUIFooter),
                        -1 != u.indexOf(".")
                            ? ((s = u.split(".")),
                              (l.id = s[0].substr(1, s[0].length - 1)),
                              (l.className = s[1]))
                            : "#" == u.charAt(0)
                            ? (l.id = u.substr(1, u.length - 1))
                            : (l.className = u),
                        (d += c);
                }
                r.append(l), (r = P(l));
            } else if (">" == i) r = r.parent();
            else if ("l" == i && a.bPaginate && a.bLengthChange) o = st(t);
            else if ("f" == i && a.bFilter) o = G(t);
            else if ("r" == i && a.bProcessing) o = ft(t);
            else if ("t" == i) o = ht(t);
            else if ("i" == i && a.bInfo) o = nt(t);
            else if ("p" == i && a.bPaginate) o = ut(t);
            else if (0 !== qt.ext.feature.length)
                for (c = 0, s = (l = qt.ext.feature).length; c < s; c++)
                    if (i == l[c].cFeature) {
                        o = l[c].fnInit(t);
                        break;
                    }
            o &&
                ((l = t.aanFeatures)[i] || (l[i] = []),
                l[i].push(o),
                r.append(o));
        }
        n.replaceWith(r), (t.nHolding = null);
    }
    function B(t, e) {
        var n,
            a,
            r,
            o,
            i,
            l,
            s,
            u,
            c,
            f,
            d = P(e).children("tr");
        for (t.splice(0, t.length), r = 0, l = d.length; r < l; r++) t.push([]);
        for (r = 0, l = d.length; r < l; r++)
            for (a = (n = d[r]).firstChild; a; ) {
                if (
                    "TD" == a.nodeName.toUpperCase() ||
                    "TH" == a.nodeName.toUpperCase()
                ) {
                    for (
                        u =
                            (u = 1 * a.getAttribute("colspan")) &&
                            0 !== u &&
                            1 !== u
                                ? u
                                : 1,
                            c =
                                (c = 1 * a.getAttribute("rowspan")) &&
                                0 !== c &&
                                1 !== c
                                    ? c
                                    : 1,
                            o = 0,
                            i = t[r];
                        i[o];

                    )
                        o++;
                    for (s = o, f = 1 === u, i = 0; i < u; i++)
                        for (o = 0; o < c; o++)
                            (t[r + o][s + i] = { cell: a, unique: f }),
                                (t[r + o].nTr = n);
                }
                a = a.nextSibling;
            }
    }
    function U(t, e, n) {
        var a = [];
        n || ((n = t.aoHeader), e && B((n = []), e));
        e = 0;
        for (var r = n.length; e < r; e++)
            for (var o = 0, i = n[e].length; o < i; o++)
                !n[e][o].unique ||
                    (a[o] && t.bSortCellsTop) ||
                    (a[o] = n[e][o].cell);
        return a;
    }
    function V(a, t, e) {
        if ((kt(a, "aoServerParams", "serverParams", [t]), t && P.isArray(t))) {
            var r = {},
                o = /(.*?)\[\]$/;
            P.each(t, function (t, e) {
                var n = e.name.match(o);
                n
                    ? ((n = n[0]), r[n] || (r[n] = []), r[n].push(e.value))
                    : (r[e.name] = e.value);
            }),
                (t = r);
        }
        var n,
            i = a.ajax,
            l = a.oInstance,
            s = function (t) {
                kt(a, null, "xhr", [a, t, a.jqXHR]), e(t);
            };
        if (P.isPlainObject(i) && i.data) {
            n = i.data;
            var u = P.isFunction(n) ? n(t, a) : n;
            t = P.isFunction(n) && u ? u : P.extend(!0, t, u);
            delete i.data;
        }
        (u = {
            data: t,
            success: function (t) {
                var e = t.error || t.sError;
                e && Rt(a, 0, e), (a.json = t), s(t);
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function (t, e) {
                var n = kt(a, null, "xhr", [a, null, a.jqXHR]);
                -1 === P.inArray(!0, n) &&
                    ("parsererror" == e
                        ? Rt(a, 0, "Invalid JSON response", 1)
                        : 4 === t.readyState && Rt(a, 0, "Ajax error", 7)),
                    dt(a, !1);
            },
        }),
            (a.oAjaxData = t),
            kt(a, null, "preXhr", [a, t]),
            a.fnServerData
                ? a.fnServerData.call(
                      l,
                      a.sAjaxSource,
                      P.map(t, function (t, e) {
                          return { name: e, value: t };
                      }),
                      s,
                      a
                  )
                : a.sAjaxSource || "string" == typeof i
                ? (a.jqXHR = P.ajax(P.extend(u, { url: i || a.sAjaxSource })))
                : P.isFunction(i)
                ? (a.jqXHR = i.call(l, t, s, a))
                : ((a.jqXHR = P.ajax(P.extend(u, i))), (i.data = n));
    }
    function X(e) {
        return (
            !e.bAjaxDataGet ||
            (e.iDraw++,
            dt(e, !0),
            V(e, t(e), function (t) {
                J(e, t);
            }),
            !1)
        );
    }
    function t(t) {
        var e,
            n,
            a,
            r,
            o = t.aoColumns,
            i = o.length,
            l = t.oFeatures,
            s = t.oPreviousSearch,
            u = t.aoPreSearchCols,
            c = [],
            f = yt(t);
        (e = t._iDisplayStart),
            (n = !1 !== l.bPaginate ? t._iDisplayLength : -1);
        var d = function (t, e) {
            c.push({ name: t, value: e });
        };
        d("sEcho", t.iDraw),
            d("iColumns", i),
            d("sColumns", re(o, "sName").join(",")),
            d("iDisplayStart", e),
            d("iDisplayLength", n);
        var h = {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: e,
            length: n,
            search: { value: s.sSearch, regex: s.bRegex },
        };
        for (e = 0; e < i; e++)
            (a = o[e]),
                (r = u[e]),
                (n = "function" == typeof a.mData ? "function" : a.mData),
                h.columns.push({
                    data: n,
                    name: a.sName,
                    searchable: a.bSearchable,
                    orderable: a.bSortable,
                    search: { value: r.sSearch, regex: r.bRegex },
                }),
                d("mDataProp_" + e, n),
                l.bFilter &&
                    (d("sSearch_" + e, r.sSearch),
                    d("bRegex_" + e, r.bRegex),
                    d("bSearchable_" + e, a.bSearchable)),
                l.bSort && d("bSortable_" + e, a.bSortable);
        return (
            l.bFilter && (d("sSearch", s.sSearch), d("bRegex", s.bRegex)),
            l.bSort &&
                (P.each(f, function (t, e) {
                    h.order.push({ column: e.col, dir: e.dir }),
                        d("iSortCol_" + t, e.col),
                        d("sSortDir_" + t, e.dir);
                }),
                d("iSortingCols", f.length)),
            null === (o = qt.ext.legacy.ajax)
                ? t.sAjaxSource
                    ? c
                    : h
                : o
                ? c
                : h
        );
    }
    function J(t, e) {
        var n = q(t, e),
            a = e.sEcho !== j ? e.sEcho : e.draw,
            r = e.iTotalRecords !== j ? e.iTotalRecords : e.recordsTotal,
            o =
                e.iTotalDisplayRecords !== j
                    ? e.iTotalDisplayRecords
                    : e.recordsFiltered;
        if (a) {
            if (1 * a < t.iDraw) return;
            t.iDraw = 1 * a;
        }
        for (
            l(t),
                t._iRecordsTotal = parseInt(r, 10),
                t._iRecordsDisplay = parseInt(o, 10),
                a = 0,
                r = n.length;
            a < r;
            a++
        )
            F(t, n[a]);
        (t.aiDisplay = t.aiDisplayMaster.slice()),
            (t.bAjaxDataGet = !1),
            M(t),
            t._bInitComplete || it(t, e),
            (t.bAjaxDataGet = !0),
            dt(t, !1);
    }
    function q(t, e) {
        var n =
            P.isPlainObject(t.ajax) && t.ajax.dataSrc !== j
                ? t.ajax.dataSrc
                : t.sAjaxDataProp;
        return "data" === n ? e.aaData || e[n] : "" !== n ? k(n)(e) : e;
    }
    function G(n) {
        var t = n.oClasses,
            e = n.sTableId,
            a = n.oLanguage,
            r = n.oPreviousSearch,
            o = n.aanFeatures,
            i = '<input type="search" class="' + t.sFilterInput + '"/>',
            l = (l = a.sSearch).match(/_INPUT_/)
                ? l.replace("_INPUT_", i)
                : l + i,
            s =
                ((t = P("<div/>", {
                    id: o.f ? null : e + "_filter",
                    class: t.sFilter,
                }).append(P("<label/>").append(l))),
                (o = function () {
                    var t = this.value ? this.value : "";
                    t != r.sSearch &&
                        ($(n, {
                            sSearch: t,
                            bRegex: r.bRegex,
                            bSmart: r.bSmart,
                            bCaseInsensitive: r.bCaseInsensitive,
                        }),
                        (n._iDisplayStart = 0),
                        M(n));
                }),
                (i =
                    null !== n.searchDelay
                        ? n.searchDelay
                        : "ssp" === Wt(n)
                        ? 400
                        : 0),
                P("input", t)
                    .val(r.sSearch)
                    .attr("placeholder", a.sSearchPlaceholder)
                    .on(
                        "http://puffintheme.com/demo/oculux/html/assets/bundles/keyup.DT search.DT input.DT paste.DT cut.DT",
                        i ? be(o, i) : o
                    )
                    .on(
                        "http://puffintheme.com/demo/oculux/html/assets/bundles/keypress.DT",
                        function (t) {
                            if (13 == t.keyCode) return !1;
                        }
                    )
                    .attr("aria-controls", e));
        return (
            P(n.nTable).on(
                "http://puffintheme.com/demo/oculux/html/assets/bundles/search.dt.DT",
                function (t, e) {
                    if (n === e)
                        try {
                            s[0] !== S.activeElement && s.val(r.sSearch);
                        } catch (t) {}
                }
            ),
            t[0]
        );
    }
    function $(t, e, n) {
        var a = t.oPreviousSearch,
            r = t.aoPreSearchCols,
            o = function (t) {
                (a.sSearch = t.sSearch),
                    (a.bRegex = t.bRegex),
                    (a.bSmart = t.bSmart),
                    (a.bCaseInsensitive = t.bCaseInsensitive);
            };
        if ((i(t), "ssp" != Wt(t))) {
            for (
                Z(
                    t,
                    e.sSearch,
                    n,
                    e.bEscapeRegex !== j ? !e.bEscapeRegex : e.bRegex,
                    e.bSmart,
                    e.bCaseInsensitive
                ),
                    o(e),
                    e = 0;
                e < r.length;
                e++
            )
                Y(
                    t,
                    r[e].sSearch,
                    e,
                    r[e].bEscapeRegex !== j ? !r[e].bEscapeRegex : r[e].bRegex,
                    r[e].bSmart,
                    r[e].bCaseInsensitive
                );
            z(t);
        } else o(e);
        (t.bFiltered = !0), kt(t, null, "search", [t]);
    }
    function z(t) {
        for (
            var e, n, a = qt.ext.search, r = t.aiDisplay, o = 0, i = a.length;
            o < i;
            o++
        ) {
            for (var l = [], s = 0, u = r.length; s < u; s++)
                (n = r[s]),
                    (e = t.aoData[n]),
                    a[o](t, e._aFilterData, n, e._aData, s) && l.push(n);
            (r.length = 0), P.merge(r, l);
        }
    }
    function Y(t, e, n, a, r, o) {
        if ("" !== e) {
            var i = [],
                l = t.aiDisplay;
            for (a = Q(e, a, r, o), r = 0; r < l.length; r++)
                (e = t.aoData[l[r]]._aFilterData[n]), a.test(e) && i.push(l[r]);
            t.aiDisplay = i;
        }
    }
    function Z(t, e, n, a, r, o) {
        (a = Q(e, a, r, o)), (o = t.oPreviousSearch.sSearch);
        var i,
            l = t.aiDisplayMaster;
        r = [];
        if ((0 !== qt.ext.search.length && (n = !0), (i = K(t)), e.length <= 0))
            t.aiDisplay = l.slice();
        else {
            for (
                (i ||
                    n ||
                    o.length > e.length ||
                    0 !== e.indexOf(o) ||
                    t.bSorted) &&
                    (t.aiDisplay = l.slice()),
                    e = t.aiDisplay,
                    n = 0;
                n < e.length;
                n++
            )
                a.test(t.aoData[e[n]]._sFilterRow) && r.push(e[n]);
            t.aiDisplay = r;
        }
    }
    function Q(t, e, n, a) {
        return (
            (t = e ? t : de(t)),
            n &&
                (t =
                    "^(?=.*?" +
                    P.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
                        if ('"' === t.charAt(0)) {
                            var e = t.match(/^"(.*)"$/);
                            t = e ? e[1] : t;
                        }
                        return t.replace('"', "");
                    }).join(")(?=.*?") +
                    ").*$"),
            RegExp(t, a ? "i" : "")
        );
    }
    function K(t) {
        var e,
            n,
            a,
            r,
            o,
            i,
            l,
            s,
            u = t.aoColumns,
            c = qt.ext.type.search;
        for (e = !1, n = 0, r = t.aoData.length; n < r; n++)
            if (!(s = t.aoData[n])._aFilterData) {
                for (i = [], a = 0, o = u.length; a < o; a++)
                    (e = u[a]).bSearchable
                        ? ((l = R(t, n, a, "filter")),
                          c[e.sType] && (l = c[e.sType](l)),
                          null === l && (l = ""),
                          "string" != typeof l &&
                              l.toString &&
                              (l = l.toString()))
                        : (l = ""),
                        l.indexOf &&
                            -1 !== l.indexOf("&") &&
                            ((he.innerHTML = l),
                            (l = pe ? he.textContent : he.innerText)),
                        l.replace && (l = l.replace(/[\r\n]/g, "")),
                        i.push(l);
                (s._aFilterData = i), (s._sFilterRow = i.join("  ")), (e = !0);
            }
        return e;
    }
    function tt(t) {
        return {
            search: t.sSearch,
            smart: t.bSmart,
            regex: t.bRegex,
            caseInsensitive: t.bCaseInsensitive,
        };
    }
    function et(t) {
        return {
            sSearch: t.search,
            bSmart: t.smart,
            bRegex: t.regex,
            bCaseInsensitive: t.caseInsensitive,
        };
    }
    function nt(t) {
        var e = t.sTableId,
            n = t.aanFeatures.i,
            a = P("<div/>", {
                class: t.oClasses.sInfo,
                id: n ? null : e + "_info",
            });
        return (
            n ||
                (t.aoDrawCallback.push({ fn: at, sName: "information" }),
                a.attr("role", "status").attr("aria-live", "polite"),
                P(t.nTable).attr("aria-describedby", e + "_info")),
            a[0]
        );
    }
    function at(t) {
        var e = t.aanFeatures.i;
        if (0 !== e.length) {
            var n = t.oLanguage,
                a = t._iDisplayStart + 1,
                r = t.fnDisplayEnd(),
                o = t.fnRecordsTotal(),
                i = t.fnRecordsDisplay(),
                l = i ? n.sInfo : n.sInfoEmpty;
            i !== o && (l += " " + n.sInfoFiltered),
                (l = rt(t, (l += n.sInfoPostFix))),
                null !== (n = n.fnInfoCallback) &&
                    (l = n.call(t.oInstance, t, a, r, o, i, l)),
                P(e).html(l);
        }
    }
    function rt(t, e) {
        var n = t.fnFormatNumber,
            a = t._iDisplayStart + 1,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay(),
            i = -1 === r;
        return e
            .replace(/_START_/g, n.call(t, a))
            .replace(/_END_/g, n.call(t, t.fnDisplayEnd()))
            .replace(/_MAX_/g, n.call(t, t.fnRecordsTotal()))
            .replace(/_TOTAL_/g, n.call(t, o))
            .replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(a / r)))
            .replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(o / r)));
    }
    function ot(n) {
        var a,
            t,
            e,
            r = n.iInitDisplayStart,
            o = n.aoColumns;
        t = n.oFeatures;
        var i = n.bDeferLoading;
        if (n.bInitialised) {
            for (
                E(n),
                    b(n),
                    O(n, n.aoHeader),
                    O(n, n.aoFooter),
                    dt(n, !0),
                    t.bAutoWidth && bt(n),
                    a = 0,
                    t = o.length;
                a < t;
                a++
            )
                (e = o[a]).sWidth && (e.nTh.style.width = Dt(e.sWidth));
            kt(n, null, "preInit", [n]),
                W(n),
                ("ssp" != (o = Wt(n)) || i) &&
                    ("ajax" == o
                        ? V(n, [], function (t) {
                              var e = q(n, t);
                              for (a = 0; a < e.length; a++) F(n, e[a]);
                              (n.iInitDisplayStart = r),
                                  W(n),
                                  dt(n, !1),
                                  it(n, t);
                          })
                        : (dt(n, !1), it(n)));
        } else
            setTimeout(function () {
                ot(n);
            }, 200);
    }
    function it(t, e) {
        (t._bInitComplete = !0),
            (e || t.oInit.aaData) && H(t),
            kt(t, null, "plugin-init", [t, e]),
            kt(t, "aoInitComplete", "init", [t, e]);
    }
    function lt(t, e) {
        var n = parseInt(e, 10);
        (t._iDisplayLength = n), Ot(t), kt(t, null, "length", [t, n]);
    }
    function st(a) {
        for (
            var t = a.oClasses,
                e = a.sTableId,
                n = a.aLengthMenu,
                r = (o = P.isArray(n[0])) ? n[0] : n,
                o =
                    ((n = o ? n[1] : n),
                    P("<select/>", {
                        name: e + "_length",
                        "aria-controls": e,
                        class: t.sLengthSelect,
                    })),
                i = 0,
                l = r.length;
            i < l;
            i++
        )
            o[0][i] = new Option(
                "number" == typeof n[i] ? a.fnFormatNumber(n[i]) : n[i],
                r[i]
            );
        var s = P("<div><label/></div>").addClass(t.sLength);
        return (
            a.aanFeatures.l || (s[0].id = e + "_length"),
            s
                .children()
                .append(
                    a.oLanguage.sLengthMenu.replace("_MENU_", o[0].outerHTML)
                ),
            P("select", s)
                .val(a._iDisplayLength)
                .on(
                    "http://puffintheme.com/demo/oculux/html/assets/bundles/change.DT",
                    function () {
                        lt(a, P(this).val()), M(a);
                    }
                ),
            P(a.nTable).on(
                "http://puffintheme.com/demo/oculux/html/assets/bundles/length.dt.DT",
                function (t, e, n) {
                    a === e && P("select", s).val(n);
                }
            ),
            s[0]
        );
    }
    function ut(t) {
        var e = t.sPaginationType,
            i = qt.ext.pager[e],
            l = "function" == typeof i,
            s = function (t) {
                M(t);
            },
            u =
                ((e = P("<div/>").addClass(t.oClasses.sPaging + e)[0]),
                t.aanFeatures);
        return (
            l || i.fnInit(t, e, s),
            u.p ||
                ((e.id = t.sTableId + "_paginate"),
                t.aoDrawCallback.push({
                    fn: function (t) {
                        if (l) {
                            var e,
                                n = t._iDisplayStart,
                                a = t._iDisplayLength,
                                r = t.fnRecordsDisplay(),
                                o =
                                    ((n = (o = -1 === a)
                                        ? 0
                                        : Math.ceil(n / a)),
                                    (a = o ? 1 : Math.ceil(r / a)),
                                    (r = i(n, a)),
                                    0);
                            for (e = u.p.length; o < e; o++)
                                Mt(t, "pageButton")(t, u.p[o], o, r, n, a);
                        } else i.fnUpdate(t, s);
                    },
                    sName: "pagination",
                })),
            e
        );
    }
    function ct(t, e, n) {
        var a = t._iDisplayStart,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay();
        return (
            0 === o || -1 === r
                ? (a = 0)
                : "number" == typeof e
                ? o < (a = e * r) && (a = 0)
                : "first" == e
                ? (a = 0)
                : "previous" == e
                ? (a = 0 <= r ? a - r : 0) < 0 && (a = 0)
                : "next" == e
                ? a + r < o && (a += r)
                : "last" == e
                ? (a = Math.floor((o - 1) / r) * r)
                : Rt(t, 0, "Unknown paging action: " + e, 5),
            (e = t._iDisplayStart !== a),
            (t._iDisplayStart = a),
            e && (kt(t, null, "page", [t]), n && M(t)),
            e
        );
    }
    function ft(t) {
        return P("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            class: t.oClasses.sProcessing,
        })
            .html(t.oLanguage.sProcessing)
            .insertBefore(t.nTable)[0];
    }
    function dt(t, e) {
        t.oFeatures.bProcessing &&
            P(t.aanFeatures.r).css("display", e ? "block" : "none"),
            kt(t, null, "processing", [t, e]);
    }
    function ht(t) {
        (c = P(t.nTable)).attr("role", "grid");
        var e = t.oScroll;
        if ("" === e.sX && "" === e.sY) return t.nTable;
        var n = e.sX,
            a = e.sY,
            r = t.oClasses,
            o = c.children("caption"),
            i = o.length ? o[0]._captionSide : null,
            l = P(c[0].cloneNode(!1)),
            s = P(c[0].cloneNode(!1)),
            u = c.children("tfoot");
        u.length || (u = null),
            (l = P("<div/>", { class: r.sScrollWrapper })
                .append(
                    P("<div/>", { class: r.sScrollHead })
                        .css({
                            overflow: "hidden",
                            position: "relative",
                            border: 0,
                            width: n ? (n ? Dt(n) : null) : "100%",
                        })
                        .append(
                            P("<div/>", { class: r.sScrollHeadInner })
                                .css({
                                    "box-sizing": "content-box",
                                    width: e.sXInner || "100%",
                                })
                                .append(
                                    l
                                        .removeAttr("id")
                                        .css("margin-left", 0)
                                        .append("top" === i ? o : null)
                                        .append(c.children("thead"))
                                )
                        )
                )
                .append(
                    P("<div/>", { class: r.sScrollBody })
                        .css({
                            position: "relative",
                            overflow: "auto",
                            width: n ? Dt(n) : null,
                        })
                        .append(c)
                )),
            u &&
                l.append(
                    P("<div/>", { class: r.sScrollFoot })
                        .css({
                            overflow: "hidden",
                            border: 0,
                            width: n ? (n ? Dt(n) : null) : "100%",
                        })
                        .append(
                            P("<div/>", { class: r.sScrollFootInner }).append(
                                s
                                    .removeAttr("id")
                                    .css("margin-left", 0)
                                    .append("bottom" === i ? o : null)
                                    .append(c.children("tfoot"))
                            )
                        )
                );
        var c,
            f = (c = l.children())[0],
            d = ((r = c[1]), u ? c[2] : null);
        return (
            n &&
                P(r).on(
                    "http://puffintheme.com/demo/oculux/html/assets/bundles/scroll.DT",
                    function () {
                        var t = this.scrollLeft;
                        (f.scrollLeft = t), u && (d.scrollLeft = t);
                    }
                ),
            P(r).css(a && e.bCollapse ? "max-height" : "height", a),
            (t.nScrollHead = f),
            (t.nScrollBody = r),
            (t.nScrollFoot = d),
            t.aoDrawCallback.push({ fn: pt, sName: "scrolling" }),
            l[0]
        );
    }
    function pt(n) {
        var t,
            e,
            a,
            r,
            o,
            i = (u = n.oScroll).sX,
            l = u.sXInner,
            s = u.sY,
            u = u.iBarWidth,
            c = P(n.nScrollHead),
            f = c[0].style,
            d = (p = c.children("div"))[0].style,
            h = p.children("table"),
            p = n.nScrollBody,
            g = P(p),
            b = p.style,
            m = P(n.nScrollFoot).children("div"),
            S = m.children("table"),
            v = P(n.nTHead),
            D = P(n.nTable),
            y = D[0],
            _ = y.style,
            T = n.nTFoot ? P(n.nTFoot) : null,
            w = n.oBrowser,
            C = w.bScrollOversize,
            x = re(n.aoColumns, "nTh"),
            I = [],
            A = [],
            F = [],
            L = [],
            R = function (t) {
                ((t = t.style).paddingTop = "0"),
                    (t.paddingBottom = "0"),
                    (t.borderTopWidth = "0"),
                    (t.borderBottomWidth = "0"),
                    (t.height = 0);
            };
        (e = p.scrollHeight > p.clientHeight),
            n.scrollBarVis !== e && n.scrollBarVis !== j
                ? ((n.scrollBarVis = e), H(n))
                : ((n.scrollBarVis = e),
                  D.children("thead, tfoot").remove(),
                  T &&
                      ((a = T.clone().prependTo(D)),
                      (t = T.find("tr")),
                      (a = a.find("tr"))),
                  (r = v.clone().prependTo(D)),
                  (v = v.find("tr")),
                  (e = r.find("tr")),
                  r.find("th, td").removeAttr("tabindex"),
                  i || ((b.width = "100%"), (c[0].style.width = "100%")),
                  P.each(U(n, r), function (t, e) {
                      (o = N(n, t)), (e.style.width = n.aoColumns[o].sWidth);
                  }),
                  T &&
                      gt(function (t) {
                          t.style.width = "";
                      }, a),
                  (c = D.outerWidth()),
                  "" === i
                      ? ((_.width = "100%"),
                        C &&
                            (D.find("tbody").height() > p.offsetHeight ||
                                "scroll" == g.css("overflow-y")) &&
                            (_.width = Dt(D.outerWidth() - u)),
                        (c = D.outerWidth()))
                      : "" !== l && ((_.width = Dt(l)), (c = D.outerWidth())),
                  gt(R, e),
                  gt(function (t) {
                      F.push(t.innerHTML), I.push(Dt(P(t).css("width")));
                  }, e),
                  gt(function (t, e) {
                      -1 !== P.inArray(t, x) && (t.style.width = I[e]);
                  }, v),
                  P(e).height(0),
                  T &&
                      (gt(R, a),
                      gt(function (t) {
                          L.push(t.innerHTML), A.push(Dt(P(t).css("width")));
                      }, a),
                      gt(function (t, e) {
                          t.style.width = A[e];
                      }, t),
                      P(a).height(0)),
                  gt(function (t, e) {
                      (t.innerHTML =
                          '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
                          F[e] +
                          "</div>"),
                          (t.style.width = I[e]);
                  }, e),
                  T &&
                      gt(function (t, e) {
                          (t.innerHTML =
                              '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
                              L[e] +
                              "</div>"),
                              (t.style.width = A[e]);
                      }, a),
                  D.outerWidth() < c
                      ? ((t =
                            p.scrollHeight > p.offsetHeight ||
                            "scroll" == g.css("overflow-y")
                                ? c + u
                                : c),
                        C &&
                            (p.scrollHeight > p.offsetHeight ||
                                "scroll" == g.css("overflow-y")) &&
                            (_.width = Dt(t - u)),
                        ("" === i || "" !== l) &&
                            Rt(n, 1, "Possible column misalignment", 6))
                      : (t = "100%"),
                  (b.width = Dt(t)),
                  (f.width = Dt(t)),
                  T && (n.nScrollFoot.style.width = Dt(t)),
                  !s && C && (b.height = Dt(y.offsetHeight + u)),
                  (i = D.outerWidth()),
                  (h[0].style.width = Dt(i)),
                  (d.width = Dt(i)),
                  (l =
                      D.height() > p.clientHeight ||
                      "scroll" == g.css("overflow-y")),
                  (d[
                      (s = "padding" + (w.bScrollbarLeft ? "Left" : "Right"))
                  ] = l ? u + "px" : "0px"),
                  T &&
                      ((S[0].style.width = Dt(i)),
                      (m[0].style.width = Dt(i)),
                      (m[0].style[s] = l ? u + "px" : "0px")),
                  D.children("colgroup").insertBefore(D.children("thead")),
                  g.scroll(),
                  (!n.bSorted && !n.bFiltered) ||
                      n._drawHold ||
                      (p.scrollTop = 0));
    }
    function gt(t, e, n) {
        for (var a, r, o = 0, i = 0, l = e.length; i < l; ) {
            for (a = e[i].firstChild, r = n ? n[i].firstChild : null; a; )
                1 === a.nodeType && (n ? t(a, r, o) : t(a, o), o++),
                    (a = a.nextSibling),
                    (r = n ? r.nextSibling : null);
            i++;
        }
    }
    function bt(t) {
        var e,
            n,
            a = t.nTable,
            r = t.aoColumns,
            o = (g = t.oScroll).sY,
            i = g.sX,
            l = g.sXInner,
            s = r.length,
            u = I(t, "bVisible"),
            c = P("th", t.nTHead),
            f = a.getAttribute("width"),
            d = a.parentNode,
            h = !1,
            p = t.oBrowser,
            g = p.bScrollOversize;
        for (
            (e = a.style.width) && -1 !== e.indexOf("%") && (f = e), e = 0;
            e < u.length;
            e++
        )
            null !== (n = r[u[e]]).sWidth &&
                ((n.sWidth = mt(n.sWidthOrig, d)), (h = !0));
        if (g || (!h && !i && !o && s == v(t) && s == c.length))
            for (e = 0; e < s; e++)
                null !== (u = N(t, e)) && (r[u].sWidth = Dt(c.eq(e).width()));
        else {
            (s = P(a).clone().css("visibility", "hidden").removeAttr("id"))
                .find("tbody tr")
                .remove();
            var b = P("<tr/>").appendTo(s.find("tbody"));
            for (
                s.find("thead, tfoot").remove(),
                    s.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),
                    s.find("tfoot th, tfoot td").css("width", ""),
                    c = U(t, s.find("thead")[0]),
                    e = 0;
                e < u.length;
                e++
            )
                (n = r[u[e]]),
                    (c[e].style.width =
                        null !== n.sWidthOrig && "" !== n.sWidthOrig
                            ? Dt(n.sWidthOrig)
                            : ""),
                    n.sWidthOrig &&
                        i &&
                        P(c[e]).append(
                            P("<div/>").css({
                                width: n.sWidthOrig,
                                margin: 0,
                                padding: 0,
                                border: 0,
                                height: 1,
                            })
                        );
            if (t.aoData.length)
                for (e = 0; e < u.length; e++)
                    (n = r[(h = u[e])]),
                        P(St(t, h))
                            .clone(!1)
                            .append(n.sContentPadding)
                            .appendTo(b);
            for (
                P("[name]", s).removeAttr("name"),
                    n = P("<div/>")
                        .css(
                            i || o
                                ? {
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      height: 1,
                                      right: 0,
                                      overflow: "hidden",
                                  }
                                : {}
                        )
                        .append(s)
                        .appendTo(d),
                    i && l
                        ? s.width(l)
                        : i
                        ? (s.css("width", "auto"),
                          s.removeAttr("width"),
                          s.width() < d.clientWidth &&
                              f &&
                              s.width(d.clientWidth))
                        : o
                        ? s.width(d.clientWidth)
                        : f && s.width(f),
                    e = o = 0;
                e < u.length;
                e++
            )
                (l = (d = P(c[e])).outerWidth() - d.width()),
                    (o += d = p.bBounding
                        ? Math.ceil(c[e].getBoundingClientRect().width)
                        : d.outerWidth()),
                    (r[u[e]].sWidth = Dt(d - l));
            (a.style.width = Dt(o)), n.remove();
        }
        f && (a.style.width = Dt(f)),
            (!f && !i) ||
                t._reszEvt ||
                ((a = function () {
                    P(m).on(
                        "resize.DT-" + t.sInstance,
                        be(function () {
                            H(t);
                        })
                    );
                }),
                g ? setTimeout(a, 1e3) : a(),
                (t._reszEvt = !0));
    }
    function mt(t, e) {
        if (!t) return 0;
        var n = P("<div/>")
                .css("width", Dt(t))
                .appendTo(e || S.body),
            a = n[0].offsetWidth;
        return n.remove(), a;
    }
    function St(t, e) {
        var n = vt(t, e);
        if (n < 0) return null;
        var a = t.aoData[n];
        return a.nTr ? a.anCells[e] : P("<td/>").html(R(t, n, e, "display"))[0];
    }
    function vt(t, e) {
        for (var n, a = -1, r = -1, o = 0, i = t.aoData.length; o < i; o++)
            (n = (n = (n = R(t, o, e, "display") + "").replace(ge, "")).replace(
                /&nbsp;/g,
                " "
            )).length > a && ((a = n.length), (r = o));
        return r;
    }
    function Dt(t) {
        return null === t
            ? "0px"
            : "number" == typeof t
            ? t < 0
                ? "0px"
                : t + "px"
            : t.match(/\d$/)
            ? t + "px"
            : t;
    }
    function yt(t) {
        var e,
            n,
            a,
            r,
            o,
            i,
            l = [],
            s = t.aoColumns;
        (e = t.aaSortingFixed), (n = P.isPlainObject(e));
        var u = [];
        for (
            a = function (t) {
                t.length && !P.isArray(t[0]) ? u.push(t) : P.merge(u, t);
            },
                P.isArray(e) && a(e),
                n && e.pre && a(e.pre),
                a(t.aaSorting),
                n && e.post && a(e.post),
                t = 0;
            t < u.length;
            t++
        )
            for (e = 0, n = (a = s[(i = u[t][0])].aDataSort).length; e < n; e++)
                (o = s[(r = a[e])].sType || "string"),
                    u[t]._idx === j &&
                        (u[t]._idx = P.inArray(u[t][1], s[r].asSorting)),
                    l.push({
                        src: i,
                        col: r,
                        dir: u[t][1],
                        index: u[t]._idx,
                        type: o,
                        formatter: qt.ext.type.order[o + "-pre"],
                    });
        return l;
    }
    function _t(t) {
        var e,
            n,
            a,
            u,
            c = [],
            f = qt.ext.type.order,
            d = t.aoData,
            r = 0,
            o = t.aiDisplayMaster;
        for (i(t), e = 0, n = (u = yt(t)).length; e < n; e++)
            (a = u[e]).formatter && r++, It(t, a.col);
        if ("ssp" != Wt(t) && 0 !== u.length) {
            for (e = 0, n = o.length; e < n; e++) c[o[e]] = e;
            r === u.length
                ? o.sort(function (t, e) {
                      var n,
                          a,
                          r,
                          o,
                          i = u.length,
                          l = d[t]._aSortData,
                          s = d[e]._aSortData;
                      for (r = 0; r < i; r++)
                          if (
                              0 !==
                              (n =
                                  (n = l[(o = u[r]).col]) < (a = s[o.col])
                                      ? -1
                                      : a < n
                                      ? 1
                                      : 0)
                          )
                              return "asc" === o.dir ? n : -n;
                      return (n = c[t]) < (a = c[e]) ? -1 : a < n ? 1 : 0;
                  })
                : o.sort(function (t, e) {
                      var n,
                          a,
                          r,
                          o,
                          i = u.length,
                          l = d[t]._aSortData,
                          s = d[e]._aSortData;
                      for (r = 0; r < i; r++)
                          if (
                              ((n = l[(o = u[r]).col]),
                              (a = s[o.col]),
                              0 !==
                                  (n = (o =
                                      f[o.type + "-" + o.dir] ||
                                      f["string-" + o.dir])(n, a)))
                          )
                              return n;
                      return (n = c[t]) < (a = c[e]) ? -1 : a < n ? 1 : 0;
                  });
        }
        t.bSorted = !0;
    }
    function Tt(t) {
        for (
            var e,
                n,
                a = t.aoColumns,
                r = yt(t),
                o = ((t = t.oLanguage.oAria), 0),
                i = a.length;
            o < i;
            o++
        ) {
            var l = (n = a[o]).asSorting;
            e = n.sTitle.replace(/<.*?>/g, "");
            var s = n.nTh;
            s.removeAttribute("aria-sort"),
                n.bSortable &&
                    (0 < r.length && r[0].col == o
                        ? (s.setAttribute(
                              "aria-sort",
                              "asc" == r[0].dir ? "ascending" : "descending"
                          ),
                          (n = l[r[0].index + 1] || l[0]))
                        : (n = l[0]),
                    (e += "asc" === n ? t.sSortAscending : t.sSortDescending)),
                s.setAttribute("aria-label", e);
        }
    }
    function wt(t, e, n, a) {
        var r = t.aaSorting,
            o = t.aoColumns[e].asSorting,
            i = function (t, e) {
                var n = t._idx;
                return (
                    n === j && (n = P.inArray(t[1], o)),
                    n + 1 < o.length ? n + 1 : e ? null : 0
                );
            };
        "number" == typeof r[0] && (r = t.aaSorting = [r]),
            n && t.oFeatures.bSortMulti
                ? -1 !== (n = P.inArray(e, re(r, "0")))
                    ? (null === (e = i(r[n], !0)) && 1 === r.length && (e = 0),
                      null === e
                          ? r.splice(n, 1)
                          : ((r[n][1] = o[e]), (r[n]._idx = e)))
                    : (r.push([e, o[0], 0]), (r[r.length - 1]._idx = 0))
                : r.length && r[0][0] == e
                ? ((e = i(r[0])),
                  (r.length = 1),
                  (r[0][1] = o[e]),
                  (r[0]._idx = e))
                : ((r.length = 0), r.push([e, o[0]]), (r[0]._idx = 0)),
            W(t),
            "function" == typeof a && a(t);
    }
    function Ct(e, t, n, a) {
        var r = e.aoColumns[n];
        Ht(t, {}, function (t) {
            !1 !== r.bSortable &&
                (e.oFeatures.bProcessing
                    ? (dt(e, !0),
                      setTimeout(function () {
                          wt(e, n, t.shiftKey, a), "ssp" !== Wt(e) && dt(e, !1);
                      }, 0))
                    : wt(e, n, t.shiftKey, a));
        });
    }
    function xt(t) {
        var e,
            n,
            a = t.aLastSort,
            r = t.oClasses.sSortColumn,
            o = yt(t),
            i = t.oFeatures;
        if (i.bSort && i.bSortClasses) {
            for (i = 0, e = a.length; i < e; i++)
                (n = a[i].src),
                    P(re(t.aoData, "anCells", n)).removeClass(
                        r + (i < 2 ? i + 1 : 3)
                    );
            for (i = 0, e = o.length; i < e; i++)
                (n = o[i].src),
                    P(re(t.aoData, "anCells", n)).addClass(
                        r + (i < 2 ? i + 1 : 3)
                    );
        }
        t.aLastSort = o;
    }
    function It(t, e) {
        var n,
            a = t.aoColumns[e],
            r = qt.ext.order[a.sSortDataType];
        r && (n = r.call(t.oInstance, t, e, u(t, e)));
        for (
            var o,
                i = qt.ext.type.order[a.sType + "-pre"],
                l = 0,
                s = t.aoData.length;
            l < s;
            l++
        )
            (a = t.aoData[l])._aSortData || (a._aSortData = []),
                (!a._aSortData[e] || r) &&
                    ((o = r ? n[l] : R(t, l, e, "sort")),
                    (a._aSortData[e] = i ? i(o) : o));
    }
    function At(n) {
        if (n.oFeatures.bStateSave && !n.bDestroying) {
            var t = {
                time: +new Date(),
                start: n._iDisplayStart,
                length: n._iDisplayLength,
                order: P.extend(!0, [], n.aaSorting),
                search: tt(n.oPreviousSearch),
                columns: P.map(n.aoColumns, function (t, e) {
                    return {
                        visible: t.bVisible,
                        search: tt(n.aoPreSearchCols[e]),
                    };
                }),
            };
            kt(n, "aoStateSaveParams", "stateSaveParams", [n, t]),
                (n.oSavedState = t),
                n.fnStateSaveCallback.call(n.oInstance, n, t);
        }
    }
    function Ft(n, t, a) {
        var r,
            o,
            i = n.aoColumns;
        t = function (t) {
            if (t && t.time) {
                var e = kt(n, "aoStateLoadParams", "stateLoadParams", [n, t]);
                if (
                    -1 === P.inArray(!1, e) &&
                    !(
                        (0 < (e = n.iStateDuration) &&
                            t.time < +new Date() - 1e3 * e) ||
                        (t.columns && i.length !== t.columns.length)
                    )
                ) {
                    if (
                        ((n.oLoadedState = P.extend(!0, {}, t)),
                        t.start !== j &&
                            ((n._iDisplayStart = t.start),
                            (n.iInitDisplayStart = t.start)),
                        t.length !== j && (n._iDisplayLength = t.length),
                        t.order !== j &&
                            ((n.aaSorting = []),
                            P.each(t.order, function (t, e) {
                                n.aaSorting.push(
                                    e[0] >= i.length ? [0, e[1]] : e
                                );
                            })),
                        t.search !== j &&
                            P.extend(n.oPreviousSearch, et(t.search)),
                        t.columns)
                    )
                        for (r = 0, o = t.columns.length; r < o; r++)
                            (e = t.columns[r]).visible !== j &&
                                (i[r].bVisible = e.visible),
                                e.search !== j &&
                                    P.extend(
                                        n.aoPreSearchCols[r],
                                        et(e.search)
                                    );
                    kt(n, "aoStateLoaded", "stateLoaded", [n, t]);
                }
            }
            a();
        };
        if (n.oFeatures.bStateSave) {
            var e = n.fnStateLoadCallback.call(n.oInstance, n, t);
            e !== j && t(e);
        } else a();
    }
    function Lt(t) {
        var e = qt.settings;
        return -1 !== (t = P.inArray(t, re(e, "nTable"))) ? e[t] : null;
    }
    function Rt(t, e, n, a) {
        if (
            ((n =
                "DataTables warning: " +
                (t ? "table id=" + t.sTableId + " - " : "") +
                n),
            a &&
                (n +=
                    ". For more information about this error, please see http://datatables.net/tn/" +
                    a),
            e)
        )
            m.console && console.log && console.log(n);
        else if (
            ((e = (e = qt.ext).sErrMode || e.errMode),
            t && kt(t, null, "error", [t, a, n]),
            "alert" == e)
        )
            alert(n);
        else {
            if ("throw" == e) throw Error(n);
            "function" == typeof e && e(t, a, n);
        }
    }
    function Pt(n, a, t, e) {
        P.isArray(t)
            ? P.each(t, function (t, e) {
                  P.isArray(e) ? Pt(n, a, e[0], e[1]) : Pt(n, a, e);
              })
            : (e === j && (e = t), a[t] !== j && (n[e] = a[t]));
    }
    function jt(t, e, n) {
        var a, r;
        for (r in e)
            e.hasOwnProperty(r) &&
                ((a = e[r]),
                P.isPlainObject(a)
                    ? (P.isPlainObject(t[r]) || (t[r] = {}),
                      P.extend(!0, t[r], a))
                    : (t[r] =
                          n && "data" !== r && "aaData" !== r && P.isArray(a)
                              ? a.slice()
                              : a));
        return t;
    }
    function Ht(e, t, n) {
        P(e)
            .on(
                "http://puffintheme.com/demo/oculux/html/assets/bundles/click.DT",
                t,
                function (t) {
                    e.blur(), n(t);
                }
            )
            .on(
                "http://puffintheme.com/demo/oculux/html/assets/bundles/keypress.DT",
                t,
                function (t) {
                    13 === t.which && (t.preventDefault(), n(t));
                }
            )
            .on(
                "http://puffintheme.com/demo/oculux/html/assets/bundles/selectstart.DT",
                function () {
                    return !1;
                }
            );
    }
    function Nt(t, e, n, a) {
        n && t[e].push({ fn: n, sName: a });
    }
    function kt(e, t, n, a) {
        var r = [];
        return (
            t &&
                (r = P.map(e[t].slice().reverse(), function (t) {
                    return t.fn.apply(e.oInstance, a);
                })),
            null !== n &&
                ((t = P.Event(n + ".dt")),
                P(e.nTable).trigger(t, a),
                r.push(t.result)),
            r
        );
    }
    function Ot(t) {
        var e = t._iDisplayStart,
            n = t.fnDisplayEnd(),
            a = t._iDisplayLength;
        n <= e && (e = n - a),
            (e -= e % a),
            (-1 === a || e < 0) && (e = 0),
            (t._iDisplayStart = e);
    }
    function Mt(t, e) {
        var n = t.renderer,
            a = qt.ext.renderer[e];
        return P.isPlainObject(n) && n[e]
            ? a[n[e]] || a._
            : ("string" == typeof n && a[n]) || a._;
    }
    function Wt(t) {
        return t.oFeatures.bServerSide
            ? "ssp"
            : t.ajax || t.sAjaxSource
            ? "ajax"
            : "dom";
    }
    function Et(t, e) {
        var n = [],
            a = ((n = Ae.numbers_length), Math.floor(n / 2));
        return (
            e <= n
                ? (n = ie(0, e))
                : t <= a
                ? ((n = ie(0, n - 2)).push("ellipsis"), n.push(e - 1))
                : (e - 1 - a <= t
                      ? (n = ie(e - (n - 2), e))
                      : ((n = ie(t - a + 2, t + a - 1)).push("ellipsis"),
                        n.push(e - 1)),
                  n.splice(0, 0, "ellipsis"),
                  n.splice(0, 0, 0)),
            (n.DT_el = "span"),
            n
        );
    }
    function Bt(n) {
        P.each(
            {
                num: function (t) {
                    return Fe(t, n);
                },
                "num-fmt": function (t) {
                    return Fe(t, n, Qt);
                },
                "html-num": function (t) {
                    return Fe(t, n, zt);
                },
                "html-num-fmt": function (t) {
                    return Fe(t, n, zt, Qt);
                },
            },
            function (t, e) {
                (Ut.type.order[t + n + "-pre"] = e),
                    t.match(/^html\-/) &&
                        (Ut.type.search[t + n] = Ut.type.search.html);
            }
        );
    }
    function e(e) {
        return function () {
            var t = [Lt(this[qt.ext.iApiIndex])].concat(
                Array.prototype.slice.call(arguments)
            );
            return qt.ext.internal[e].apply(this, t);
        };
    }
    var Ut,
        Vt,
        Xt,
        Jt,
        qt = function (b) {
            (this.$ = function (t, e) {
                return this.api(!0).$(t, e);
            }),
                (this._ = function (t, e) {
                    return this.api(!0).rows(t, e).data();
                }),
                (this.api = function (t) {
                    return new Vt(t ? Lt(this[Ut.iApiIndex]) : this);
                }),
                (this.fnAddData = function (t, e) {
                    var n = this.api(!0),
                        a =
                            P.isArray(t) &&
                            (P.isArray(t[0]) || P.isPlainObject(t[0]))
                                ? n.rows.add(t)
                                : n.row.add(t);
                    return (e === j || e) && n.draw(), a.flatten().toArray();
                }),
                (this.fnAdjustColumnSizing = function (t) {
                    var e = this.api(!0).columns.adjust(),
                        n = e.settings()[0],
                        a = n.oScroll;
                    t === j || t
                        ? e.draw(!1)
                        : ("" !== a.sX || "" !== a.sY) && pt(n);
                }),
                (this.fnClearTable = function (t) {
                    var e = this.api(!0).clear();
                    (t === j || t) && e.draw();
                }),
                (this.fnClose = function (t) {
                    this.api(!0).row(t).child.hide();
                }),
                (this.fnDeleteRow = function (t, e, n) {
                    var a = this.api(!0),
                        r = (t = a.rows(t)).settings()[0],
                        o = r.aoData[t[0][0]];
                    return (
                        t.remove(),
                        e && e.call(this, r, o),
                        (n === j || n) && a.draw(),
                        o
                    );
                }),
                (this.fnDestroy = function (t) {
                    this.api(!0).destroy(t);
                }),
                (this.fnDraw = function (t) {
                    this.api(!0).draw(t);
                }),
                (this.fnFilter = function (t, e, n, a, r, o) {
                    (r = this.api(!0)),
                        null === e || e === j
                            ? r.search(t, n, a, o)
                            : r.column(e).search(t, n, a, o),
                        r.draw();
                }),
                (this.fnGetData = function (t, e) {
                    var n = this.api(!0);
                    if (t !== j) {
                        var a = t.nodeName ? t.nodeName.toLowerCase() : "";
                        return e !== j || "td" == a || "th" == a
                            ? n.cell(t, e).data()
                            : n.row(t).data() || null;
                    }
                    return n.data().toArray();
                }),
                (this.fnGetNodes = function (t) {
                    var e = this.api(!0);
                    return t !== j
                        ? e.row(t).node()
                        : e.rows().nodes().flatten().toArray();
                }),
                (this.fnGetPosition = function (t) {
                    var e = this.api(!0),
                        n = t.nodeName.toUpperCase();
                    return "TR" == n
                        ? e.row(t).index()
                        : "TD" == n || "TH" == n
                        ? [
                              (t = e.cell(t).index()).row,
                              t.columnVisible,
                              t.column,
                          ]
                        : null;
                }),
                (this.fnIsOpen = function (t) {
                    return this.api(!0).row(t).child.isShown();
                }),
                (this.fnOpen = function (t, e, n) {
                    return this.api(!0).row(t).child(e, n).show().child()[0];
                }),
                (this.fnPageChange = function (t, e) {
                    var n = this.api(!0).page(t);
                    (e === j || e) && n.draw(!1);
                }),
                (this.fnSetColumnVis = function (t, e, n) {
                    (t = this.api(!0).column(t).visible(e)),
                        (n === j || n) && t.columns.adjust().draw();
                }),
                (this.fnSettings = function () {
                    return Lt(this[Ut.iApiIndex]);
                }),
                (this.fnSort = function (t) {
                    this.api(!0).order(t).draw();
                }),
                (this.fnSortListener = function (t, e, n) {
                    this.api(!0).order.listener(t, e, n);
                }),
                (this.fnUpdate = function (t, e, n, a, r) {
                    var o = this.api(!0);
                    return (
                        n === j || null === n
                            ? o.row(e).data(t)
                            : o.cell(e, n).data(t),
                        (r === j || r) && o.columns.adjust(),
                        (a === j || a) && o.draw(),
                        0
                    );
                }),
                (this.fnVersionCheck = Ut.fnVersionCheck);
            var m = this,
                S = b === j,
                v = this.length;
            for (var t in (S && (b = {}),
            (this.oApi = this.internal = Ut.internal),
            qt.ext.internal))
                t && (this[t] = e(t));
            return (
                this.each(function () {
                    var n,
                        t = {},
                        a = 1 < v ? jt(t, b, !0) : b,
                        r = 0,
                        o = ((t = this.getAttribute("id")), !1),
                        e = qt.defaults,
                        i = P(this);
                    if ("table" != this.nodeName.toLowerCase())
                        Rt(
                            null,
                            0,
                            "Non-table node initialisation (" +
                                this.nodeName +
                                ")",
                            2
                        );
                    else {
                        _(e),
                            T(e.column),
                            D(e, e, !0),
                            D(e.column, e.column, !0),
                            D(e, P.extend(a, i.data()));
                        var l = qt.settings;
                        r = 0;
                        for (n = l.length; r < n; r++) {
                            var s = l[r];
                            if (
                                s.nTable == this ||
                                s.nTHead.parentNode == this ||
                                (s.nTFoot && s.nTFoot.parentNode == this)
                            ) {
                                var u =
                                    a.bRetrieve !== j
                                        ? a.bRetrieve
                                        : e.bRetrieve;
                                if (S || u) return s.oInstance;
                                if (
                                    a.bDestroy !== j ? a.bDestroy : e.bDestroy
                                ) {
                                    s.oInstance.fnDestroy();
                                    break;
                                }
                                return void Rt(
                                    s,
                                    0,
                                    "Cannot reinitialise DataTable",
                                    3
                                );
                            }
                            if (s.sTableId == this.id) {
                                l.splice(r, 1);
                                break;
                            }
                        }
                        (null !== t && "" !== t) ||
                            (this.id = t =
                                "DataTables_Table_" + qt.ext._unique++);
                        var c = P.extend(!0, {}, qt.models.oSettings, {
                            sDestroyWidth: i[0].style.width,
                            sInstance: t,
                            sTableId: t,
                        });
                        (c.nTable = this),
                            (c.oApi = m.internal),
                            (c.oInit = a),
                            l.push(c),
                            (c.oInstance = 1 === m.length ? m : i.dataTable()),
                            _(a),
                            a.oLanguage && y(a.oLanguage),
                            a.aLengthMenu &&
                                !a.iDisplayLength &&
                                (a.iDisplayLength = P.isArray(a.aLengthMenu[0])
                                    ? a.aLengthMenu[0][0]
                                    : a.aLengthMenu[0]),
                            (a = jt(P.extend(!0, {}, e), a)),
                            Pt(
                                c.oFeatures,
                                a,
                                "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
                                    " "
                                )
                            ),
                            Pt(c, a, [
                                "asStripeClasses",
                                "ajax",
                                "fnServerData",
                                "fnFormatNumber",
                                "sServerMethod",
                                "aaSorting",
                                "aaSortingFixed",
                                "aLengthMenu",
                                "sPaginationType",
                                "sAjaxSource",
                                "sAjaxDataProp",
                                "iStateDuration",
                                "sDom",
                                "bSortCellsTop",
                                "iTabIndex",
                                "fnStateLoadCallback",
                                "fnStateSaveCallback",
                                "renderer",
                                "searchDelay",
                                "rowId",
                                ["iCookieDuration", "iStateDuration"],
                                ["oSearch", "oPreviousSearch"],
                                ["aoSearchCols", "aoPreSearchCols"],
                                ["iDisplayLength", "_iDisplayLength"],
                            ]),
                            Pt(c.oScroll, a, [
                                ["sScrollX", "sX"],
                                ["sScrollXInner", "sXInner"],
                                ["sScrollY", "sY"],
                                ["bScrollCollapse", "bCollapse"],
                            ]),
                            Pt(c.oLanguage, a, "fnInfoCallback"),
                            Nt(c, "aoDrawCallback", a.fnDrawCallback, "user"),
                            Nt(c, "aoServerParams", a.fnServerParams, "user"),
                            Nt(
                                c,
                                "aoStateSaveParams",
                                a.fnStateSaveParams,
                                "user"
                            ),
                            Nt(
                                c,
                                "aoStateLoadParams",
                                a.fnStateLoadParams,
                                "user"
                            ),
                            Nt(c, "aoStateLoaded", a.fnStateLoaded, "user"),
                            Nt(c, "aoRowCallback", a.fnRowCallback, "user"),
                            Nt(
                                c,
                                "aoRowCreatedCallback",
                                a.fnCreatedRow,
                                "user"
                            ),
                            Nt(
                                c,
                                "aoHeaderCallback",
                                a.fnHeaderCallback,
                                "user"
                            ),
                            Nt(
                                c,
                                "aoFooterCallback",
                                a.fnFooterCallback,
                                "user"
                            ),
                            Nt(c, "aoInitComplete", a.fnInitComplete, "user"),
                            Nt(
                                c,
                                "aoPreDrawCallback",
                                a.fnPreDrawCallback,
                                "user"
                            ),
                            (c.rowIdFn = k(a.rowId)),
                            w(c);
                        var f = c.oClasses;
                        P.extend(f, qt.ext.classes, a.oClasses),
                            i.addClass(f.sTable),
                            c.iInitDisplayStart === j &&
                                ((c.iInitDisplayStart = a.iDisplayStart),
                                (c._iDisplayStart = a.iDisplayStart)),
                            null !== a.iDeferLoading &&
                                ((c.bDeferLoading = !0),
                                (t = P.isArray(a.iDeferLoading)),
                                (c._iRecordsDisplay = t
                                    ? a.iDeferLoading[0]
                                    : a.iDeferLoading),
                                (c._iRecordsTotal = t
                                    ? a.iDeferLoading[1]
                                    : a.iDeferLoading));
                        var d = c.oLanguage;
                        P.extend(!0, d, a.oLanguage),
                            d.sUrl &&
                                (P.ajax({
                                    dataType: "json",
                                    url: d.sUrl,
                                    success: function (t) {
                                        y(t),
                                            D(e.oLanguage, t),
                                            P.extend(!0, d, t),
                                            ot(c);
                                    },
                                    error: function () {
                                        ot(c);
                                    },
                                }),
                                (o = !0)),
                            null === a.asStripeClasses &&
                                (c.asStripeClasses = [
                                    f.sStripeOdd,
                                    f.sStripeEven,
                                ]);
                        t = c.asStripeClasses;
                        var h = i.children("tbody").find("tr").eq(0);
                        if (
                            (-1 !==
                                P.inArray(
                                    !0,
                                    P.map(t, function (t) {
                                        return h.hasClass(t);
                                    })
                                ) &&
                                (P("tbody tr", this).removeClass(t.join(" ")),
                                (c.asDestroyStripes = t.slice())),
                            (t = []),
                            0 !==
                                (l = this.getElementsByTagName("thead"))
                                    .length &&
                                (B(c.aoHeader, l[0]), (t = U(c))),
                            null === a.aoColumns)
                        )
                            for (l = [], r = 0, n = t.length; r < n; r++)
                                l.push(null);
                        else l = a.aoColumns;
                        for (r = 0, n = l.length; r < n; r++)
                            C(c, t ? t[r] : null);
                        if (
                            (A(c, a.aoColumnDefs, l, function (t, e) {
                                x(c, t, e);
                            }),
                            h.length)
                        ) {
                            var p = function (t, e) {
                                return null !== t.getAttribute("data-" + e)
                                    ? e
                                    : null;
                            };
                            P(h[0])
                                .children("th, td")
                                .each(function (t, e) {
                                    var n = c.aoColumns[t];
                                    if (n.mData === t) {
                                        var a = p(e, "sort") || p(e, "order"),
                                            r =
                                                p(e, "filter") ||
                                                p(e, "search");
                                        (null === a && null === r) ||
                                            ((n.mData = {
                                                _: t + ".display",
                                                sort:
                                                    null !== a
                                                        ? t + ".@data-" + a
                                                        : j,
                                                type:
                                                    null !== a
                                                        ? t + ".@data-" + a
                                                        : j,
                                                filter:
                                                    null !== r
                                                        ? t + ".@data-" + r
                                                        : j,
                                            }),
                                            x(c, t));
                                    }
                                });
                        }
                        var g = c.oFeatures;
                        t = function () {
                            if (a.aaSorting === j) {
                                var t = c.aaSorting;
                                for (r = 0, n = t.length; r < n; r++)
                                    t[r][1] = c.aoColumns[r].asSorting[0];
                            }
                            xt(c),
                                g.bSort &&
                                    Nt(c, "aoDrawCallback", function () {
                                        if (c.bSorted) {
                                            var t = yt(c),
                                                n = {};
                                            P.each(t, function (t, e) {
                                                n[e.src] = e.dir;
                                            }),
                                                kt(c, null, "order", [c, t, n]),
                                                Tt(c);
                                        }
                                    }),
                                Nt(
                                    c,
                                    "aoDrawCallback",
                                    function () {
                                        (c.bSorted ||
                                            "ssp" === Wt(c) ||
                                            g.bDeferRender) &&
                                            xt(c);
                                    },
                                    "sc"
                                );
                            t = i.children("caption").each(function () {
                                this._captionSide = P(this).css("caption-side");
                            });
                            var e = i.children("thead");
                            if (
                                (0 === e.length &&
                                    (e = P("<thead/>").appendTo(i)),
                                (c.nTHead = e[0]),
                                0 === (e = i.children("tbody")).length &&
                                    (e = P("<tbody/>").appendTo(i)),
                                (c.nTBody = e[0]),
                                0 === (e = i.children("tfoot")).length &&
                                    0 < t.length &&
                                    ("" !== c.oScroll.sX ||
                                        "" !== c.oScroll.sY) &&
                                    (e = P("<tfoot/>").appendTo(i)),
                                0 === e.length || 0 === e.children().length
                                    ? i.addClass(f.sNoFooter)
                                    : 0 < e.length &&
                                      ((c.nTFoot = e[0]),
                                      B(c.aoFooter, c.nTFoot)),
                                a.aaData)
                            )
                                for (r = 0; r < a.aaData.length; r++)
                                    F(c, a.aaData[r]);
                            else
                                (c.bDeferLoading || "dom" == Wt(c)) &&
                                    L(c, P(c.nTBody).children("tr"));
                            (c.aiDisplay = c.aiDisplayMaster.slice()),
                                !(c.bInitialised = !0) === o && ot(c);
                        };
                        a.bStateSave
                            ? ((g.bStateSave = !0),
                              Nt(c, "aoDrawCallback", At, "state_save"),
                              Ft(c, a, t))
                            : t();
                    }
                }),
                (m = null),
                this
            );
        },
        Gt = {},
        $t = /[\r\n]/g,
        zt = /<.*?>/g,
        Yt = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        Zt = RegExp(
            "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
            "g"
        ),
        Qt = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        Kt = function (t) {
            return !t || !0 === t || "-" === t;
        },
        te = function (t) {
            var e = parseInt(t, 10);
            return !isNaN(e) && isFinite(t) ? e : null;
        },
        ee = function (t, e) {
            return (
                Gt[e] || (Gt[e] = RegExp(de(e), "g")),
                "string" == typeof t && "." !== e
                    ? t.replace(/\./g, "").replace(Gt[e], ".")
                    : t
            );
        },
        ne = function (t, e, n) {
            var a = "string" == typeof t;
            return (
                !!Kt(t) ||
                (e && a && (t = ee(t, e)),
                n && a && (t = t.replace(Qt, "")),
                !isNaN(parseFloat(t)) && isFinite(t))
            );
        },
        ae = function (t, e, n) {
            return (
                !!Kt(t) ||
                ((Kt(t) || "string" == typeof t) &&
                    !!ne(t.replace(zt, ""), e, n)) ||
                null
            );
        },
        re = function (t, e, n) {
            var a = [],
                r = 0,
                o = t.length;
            if (n !== j)
                for (; r < o; r++) t[r] && t[r][e] && a.push(t[r][e][n]);
            else for (; r < o; r++) t[r] && a.push(t[r][e]);
            return a;
        },
        oe = function (t, e, n, a) {
            var r = [],
                o = 0,
                i = e.length;
            if (a !== j) for (; o < i; o++) t[e[o]][n] && r.push(t[e[o]][n][a]);
            else for (; o < i; o++) r.push(t[e[o]][n]);
            return r;
        },
        ie = function (t, e) {
            var n,
                a = [];
            e === j ? ((e = 0), (n = t)) : ((n = e), (e = t));
            for (var r = e; r < n; r++) a.push(r);
            return a;
        },
        le = function (t) {
            for (var e = [], n = 0, a = t.length; n < a; n++)
                t[n] && e.push(t[n]);
            return e;
        },
        se = function (t) {
            var e;
            t: {
                if (!(t.length < 2))
                    for (
                        var n = (e = t.slice().sort())[0], a = 1, r = e.length;
                        a < r;
                        a++
                    ) {
                        if (e[a] === n) {
                            e = !1;
                            break t;
                        }
                        n = e[a];
                    }
                e = !0;
            }
            if (e) return t.slice();
            e = [];
            r = t.length;
            var o,
                i = 0;
            a = 0;
            t: for (; a < r; a++) {
                for (n = t[a], o = 0; o < i; o++) if (e[o] === n) continue t;
                e.push(n), i++;
            }
            return e;
        };
    qt.util = {
        throttle: function (a, t) {
            var r,
                o,
                i = t !== j ? t : 200;
            return function () {
                var t = this,
                    e = +new Date(),
                    n = arguments;
                r && e < r + i
                    ? (clearTimeout(o),
                      (o = setTimeout(function () {
                          (r = j), a.apply(t, n);
                      }, i)))
                    : ((r = e), a.apply(t, n));
            };
        },
        escapeRegex: function (t) {
            return t.replace(Zt, "\\$1");
        },
    };
    var ue = function (t, e, n) {
            t[e] !== j && (t[n] = t[e]);
        },
        ce = /\[.*?\]$/,
        fe = /\(\)$/,
        de = qt.util.escapeRegex,
        he = P("<div>")[0],
        pe = he.textContent !== j,
        ge = /<.*?>/g,
        be = qt.util.throttle,
        me = [],
        Se = Array.prototype;
    (Vt = function (t, e) {
        if (!(this instanceof Vt)) return new Vt(t, e);
        var i = [],
            n = function (t) {
                var e, n, a, r, o;
                (e = t),
                    (r = qt.settings),
                    (o = P.map(r, function (t) {
                        return t.nTable;
                    })),
                    (t = e
                        ? e.nTable && e.oApi
                            ? [e]
                            : e.nodeName && "table" === e.nodeName.toLowerCase()
                            ? -1 !== (n = P.inArray(e, o))
                                ? [r[n]]
                                : null
                            : e && "function" == typeof e.settings
                            ? e.settings().toArray()
                            : ("string" == typeof e
                                  ? (a = P(e))
                                  : e instanceof P && (a = e),
                              a
                                  ? a
                                        .map(function () {
                                            return -1 !==
                                                (n = P.inArray(this, o))
                                                ? r[n]
                                                : null;
                                        })
                                        .toArray()
                                  : void 0)
                        : []) && (i = i.concat(t));
            };
        if (P.isArray(t)) for (var a = 0, r = t.length; a < r; a++) n(t[a]);
        else n(t);
        (this.context = se(i)),
            e && P.merge(this, e),
            (this.selector = { rows: null, cols: null, opts: null }),
            Vt.extend(this, this, me);
    }),
        (qt.Api = Vt),
        P.extend(Vt.prototype, {
            any: function () {
                return 0 !== this.count();
            },
            concat: Se.concat,
            context: [],
            count: function () {
                return this.flatten().length;
            },
            each: function (t) {
                for (var e = 0, n = this.length; e < n; e++)
                    t.call(this, this[e], e, this);
                return this;
            },
            eq: function (t) {
                var e = this.context;
                return e.length > t ? new Vt(e[t], this[t]) : null;
            },
            filter: function (t) {
                var e = [];
                if (Se.filter) e = Se.filter.call(this, t, this);
                else
                    for (var n = 0, a = this.length; n < a; n++)
                        t.call(this, this[n], n, this) && e.push(this[n]);
                return new Vt(this.context, e);
            },
            flatten: function () {
                var t = [];
                return new Vt(this.context, t.concat.apply(t, this.toArray()));
            },
            join: Se.join,
            indexOf:
                Se.indexOf ||
                function (t, e) {
                    for (var n = e || 0, a = this.length; n < a; n++)
                        if (this[n] === t) return n;
                    return -1;
                },
            iterator: function (t, e, n, a) {
                var r,
                    o,
                    i,
                    l,
                    s,
                    u,
                    c,
                    f = [],
                    d = this.context,
                    h = this.selector;
                for (
                    "string" == typeof t &&
                        ((a = n), (n = e), (e = t), (t = !1)),
                        o = 0,
                        i = d.length;
                    o < i;
                    o++
                ) {
                    var p = new Vt(d[o]);
                    if ("table" === e)
                        (r = n.call(p, d[o], o)) !== j && f.push(r);
                    else if ("columns" === e || "rows" === e)
                        (r = n.call(p, d[o], this[o], o)) !== j && f.push(r);
                    else if (
                        "column" === e ||
                        "column-rows" === e ||
                        "row" === e ||
                        "cell" === e
                    )
                        for (
                            c = this[o],
                                "column-rows" === e && (u = Te(d[o], h.opts)),
                                l = 0,
                                s = c.length;
                            l < s;
                            l++
                        )
                            (r = c[l]),
                                (r =
                                    "cell" === e
                                        ? n.call(p, d[o], r.row, r.column, o, l)
                                        : n.call(p, d[o], r, o, l, u)) !== j &&
                                    f.push(r);
                }
                return f.length || a
                    ? (((e = (t = new Vt(d, t ? f.concat.apply([], f) : f))
                          .selector).rows = h.rows),
                      (e.cols = h.cols),
                      (e.opts = h.opts),
                      t)
                    : this;
            },
            lastIndexOf:
                Se.lastIndexOf ||
                function (t, e) {
                    return this.indexOf.apply(
                        this.toArray.reverse(),
                        arguments
                    );
                },
            length: 0,
            map: function (t) {
                var e = [];
                if (Se.map) e = Se.map.call(this, t, this);
                else
                    for (var n = 0, a = this.length; n < a; n++)
                        e.push(t.call(this, this[n], n));
                return new Vt(this.context, e);
            },
            pluck: function (e) {
                return this.map(function (t) {
                    return t[e];
                });
            },
            pop: Se.pop,
            push: Se.push,
            reduce:
                Se.reduce ||
                function (t, e) {
                    return n(this, t, e, 0, this.length, 1);
                },
            reduceRight:
                Se.reduceRight ||
                function (t, e) {
                    return n(this, t, e, this.length - 1, -1, -1);
                },
            reverse: Se.reverse,
            selector: null,
            shift: Se.shift,
            slice: function () {
                return new Vt(this.context, this);
            },
            sort: Se.sort,
            splice: Se.splice,
            toArray: function () {
                return Se.slice.call(this);
            },
            to$: function () {
                return P(this);
            },
            toJQuery: function () {
                return P(this);
            },
            unique: function () {
                return new Vt(this.context, se(this));
            },
            unshift: Se.unshift,
        }),
        (Vt.extend = function (t, e, n) {
            if (n.length && e && (e instanceof Vt || e.__dt_wrapper)) {
                var a,
                    r,
                    o,
                    i = function (e, n, a) {
                        return function () {
                            var t = n.apply(e, arguments);
                            return Vt.extend(t, t, a.methodExt), t;
                        };
                    };
                for (a = 0, r = n.length; a < r; a++)
                    (e[(o = n[a]).name] =
                        "function" == typeof o.val
                            ? i(t, o.val, o)
                            : P.isPlainObject(o.val)
                            ? {}
                            : o.val),
                        (e[o.name].__dt_wrapper = !0),
                        Vt.extend(t, e[o.name], o.propExt);
            }
        }),
        (Vt.register = Xt = function (t, e) {
            if (P.isArray(t))
                for (var n = 0, a = t.length; n < a; n++) Vt.register(t[n], e);
            else {
                var r,
                    o,
                    i = t.split("."),
                    l = me;
                for (n = 0, a = i.length; n < a; n++) {
                    var s;
                    r = (o = -1 !== i[n].indexOf("()"))
                        ? i[n].replace("()", "")
                        : i[n];
                    t: {
                        s = 0;
                        for (var u = l.length; s < u; s++)
                            if (l[s].name === r) {
                                s = l[s];
                                break t;
                            }
                        s = null;
                    }
                    s ||
                        ((s = { name: r, val: {}, methodExt: [], propExt: [] }),
                        l.push(s)),
                        n === a - 1
                            ? (s.val = e)
                            : (l = o ? s.methodExt : s.propExt);
                }
            }
        }),
        (Vt.registerPlural = Jt = function (t, e, n) {
            Vt.register(t, n),
                Vt.register(e, function () {
                    var t = n.apply(this, arguments);
                    return t === this
                        ? this
                        : t instanceof Vt
                        ? t.length
                            ? P.isArray(t[0])
                                ? new Vt(t.context, t[0])
                                : t[0]
                            : j
                        : t;
                });
        }),
        Xt("tables()", function (t) {
            var e;
            if (t) {
                e = Vt;
                var n = this.context;
                if ("number" == typeof t) t = [n[t]];
                else {
                    var a = P.map(n, function (t) {
                        return t.nTable;
                    });
                    t = P(a)
                        .filter(t)
                        .map(function () {
                            var t = P.inArray(this, a);
                            return n[t];
                        })
                        .toArray();
                }
                e = new e(t);
            } else e = this;
            return e;
        }),
        Xt("table()", function (t) {
            var e = (t = this.tables(t)).context;
            return e.length ? new Vt(e[0]) : t;
        }),
        Jt("tables().nodes()", "table().node()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTable;
                },
                1
            );
        }),
        Jt("tables().body()", "table().body()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTBody;
                },
                1
            );
        }),
        Jt("tables().header()", "table().header()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTHead;
                },
                1
            );
        }),
        Jt("tables().footer()", "table().footer()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTFoot;
                },
                1
            );
        }),
        Jt("tables().containers()", "table().container()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTableWrapper;
                },
                1
            );
        }),
        Xt("draw()", function (e) {
            return this.iterator("table", function (t) {
                "page" === e
                    ? M(t)
                    : ("string" == typeof e && (e = "full-hold" !== e),
                      W(t, !1 === e));
            });
        }),
        Xt("page()", function (e) {
            return e === j
                ? this.page.info().page
                : this.iterator("table", function (t) {
                      ct(t, e);
                  });
        }),
        Xt("page.info()", function () {
            if (0 === this.context.length) return j;
            var t = this.context[0],
                e = t._iDisplayStart,
                n = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
                a = t.fnRecordsDisplay(),
                r = -1 === n;
            return {
                page: r ? 0 : Math.floor(e / n),
                pages: r ? 1 : Math.ceil(a / n),
                start: e,
                end: t.fnDisplayEnd(),
                length: n,
                recordsTotal: t.fnRecordsTotal(),
                recordsDisplay: a,
                serverSide: "ssp" === Wt(t),
            };
        }),
        Xt("page.len()", function (e) {
            return e === j
                ? 0 !== this.context.length
                    ? this.context[0]._iDisplayLength
                    : j
                : this.iterator("table", function (t) {
                      lt(t, e);
                  });
        });
    var ve = function (a, r, t) {
        if (t) {
            var e = new Vt(a);
            e.one("draw", function () {
                t(e.ajax.json());
            });
        }
        if ("ssp" == Wt(a)) W(a, r);
        else {
            dt(a, !0);
            var n = a.jqXHR;
            n && 4 !== n.readyState && n.abort(),
                V(a, [], function (t) {
                    l(a);
                    for (var e = 0, n = (t = q(a, t)).length; e < n; e++)
                        F(a, t[e]);
                    W(a, r), dt(a, !1);
                });
        }
    };
    Xt("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json;
    }),
        Xt("ajax.params()", function () {
            var t = this.context;
            if (0 < t.length) return t[0].oAjaxData;
        }),
        Xt("ajax.reload()", function (e, n) {
            return this.iterator("table", function (t) {
                ve(t, !1 === n, e);
            });
        }),
        Xt("ajax.url()", function (e) {
            var t = this.context;
            return e === j
                ? 0 === t.length
                    ? j
                    : (t = t[0]).ajax
                    ? P.isPlainObject(t.ajax)
                        ? t.ajax.url
                        : t.ajax
                    : t.sAjaxSource
                : this.iterator("table", function (t) {
                      P.isPlainObject(t.ajax) ? (t.ajax.url = e) : (t.ajax = e);
                  });
        }),
        Xt("ajax.url().load()", function (e, n) {
            return this.iterator("table", function (t) {
                ve(t, !1 === n, e);
            });
        });
    var De = function (t, e, n, a, r) {
            var o,
                i,
                l,
                s,
                u,
                c,
                f = [];
            for (
                l = typeof e,
                    (e &&
                        "string" !== l &&
                        "function" !== l &&
                        e.length !== j) ||
                        (e = [e]),
                    l = 0,
                    s = e.length;
                l < s;
                l++
            )
                for (
                    u = 0,
                        c = (i =
                            e[l] && e[l].split && !e[l].match(/[\[\(:]/)
                                ? e[l].split(",")
                                : [e[l]]).length;
                    u < c;
                    u++
                )
                    (o = n("string" == typeof i[u] ? P.trim(i[u]) : i[u])) &&
                        o.length &&
                        (f = f.concat(o));
            if ((t = Ut.selector[t]).length)
                for (l = 0, s = t.length; l < s; l++) f = t[l](a, r, f);
            return se(f);
        },
        ye = function (t) {
            return (
                t || (t = {}),
                t.filter && t.search === j && (t.search = t.filter),
                P.extend({ search: "none", order: "current", page: "all" }, t)
            );
        },
        _e = function (t) {
            for (var e = 0, n = t.length; e < n; e++)
                if (0 < t[e].length)
                    return (
                        (t[0] = t[e]),
                        (t[0].length = 1),
                        (t.length = 1),
                        (t.context = [t.context[e]]),
                        t
                    );
            return (t.length = 0), t;
        },
        Te = function (t, e) {
            var n,
                a,
                r,
                o = [],
                i = t.aiDisplay;
            n = t.aiDisplayMaster;
            var l = e.search;
            if (((a = e.order), (r = e.page), "ssp" == Wt(t)))
                return "removed" === l ? [] : ie(0, n.length);
            if ("current" == r)
                for (n = t._iDisplayStart, a = t.fnDisplayEnd(); n < a; n++)
                    o.push(i[n]);
            else if ("current" == a || "applied" == a)
                o =
                    "none" == l
                        ? n.slice()
                        : "applied" == l
                        ? i.slice()
                        : P.map(n, function (t) {
                              return -1 === P.inArray(t, i) ? t : null;
                          });
            else if ("index" == a || "original" == a)
                for (n = 0, a = t.aoData.length; n < a; n++)
                    "none" == l
                        ? o.push(n)
                        : ((-1 === (r = P.inArray(n, i)) && "removed" == l) ||
                              (0 <= r && "applied" == l)) &&
                          o.push(n);
            return o;
        };
    Xt("rows()", function (t, e) {
        t === j ? (t = "") : P.isPlainObject(t) && ((e = t), (t = ""));
        e = ye(e);
        var n = this.iterator(
            "table",
            function (a) {
                var r,
                    o = e;
                return De(
                    "row",
                    t,
                    function (n) {
                        var t = te(n);
                        if (null !== t && !o) return [t];
                        if (
                            (r || (r = Te(a, o)),
                            null !== t && -1 !== P.inArray(t, r))
                        )
                            return [t];
                        if (null === n || n === j || "" === n) return r;
                        if ("function" == typeof n)
                            return P.map(r, function (t) {
                                var e = a.aoData[t];
                                return n(t, e._aData, e.nTr) ? t : null;
                            });
                        if (((t = le(oe(a.aoData, r, "nTr"))), n.nodeName))
                            return n._DT_RowIndex !== j
                                ? [n._DT_RowIndex]
                                : n._DT_CellIndex
                                ? [n._DT_CellIndex.row]
                                : (t = P(n).closest("*[data-dt-row]")).length
                                ? [t.data("dt-row")]
                                : [];
                        if ("string" == typeof n && "#" === n.charAt(0)) {
                            var e = a.aIds[n.replace(/^#/, "")];
                            if (e !== j) return [e.idx];
                        }
                        return P(t)
                            .filter(n)
                            .map(function () {
                                return this._DT_RowIndex;
                            })
                            .toArray();
                    },
                    a,
                    o
                );
            },
            1
        );
        return (n.selector.rows = t), (n.selector.opts = e), n;
    }),
        Xt("rows().nodes()", function () {
            return this.iterator(
                "row",
                function (t, e) {
                    return t.aoData[e].nTr || j;
                },
                1
            );
        }),
        Xt("rows().data()", function () {
            return this.iterator(
                !0,
                "rows",
                function (t, e) {
                    return oe(t.aoData, e, "_aData");
                },
                1
            );
        }),
        Jt("rows().cache()", "row().cache()", function (a) {
            return this.iterator(
                "row",
                function (t, e) {
                    var n = t.aoData[e];
                    return "search" === a ? n._aFilterData : n._aSortData;
                },
                1
            );
        }),
        Jt("rows().invalidate()", "row().invalidate()", function (n) {
            return this.iterator("row", function (t, e) {
                r(t, e, n);
            });
        }),
        Jt("rows().indexes()", "row().index()", function () {
            return this.iterator(
                "row",
                function (t, e) {
                    return e;
                },
                1
            );
        }),
        Jt("rows().ids()", "row().id()", function (t) {
            for (var e = [], n = this.context, a = 0, r = n.length; a < r; a++)
                for (var o = 0, i = this[a].length; o < i; o++) {
                    var l = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
                    e.push((!0 === t ? "#" : "") + l);
                }
            return new Vt(n, e);
        }),
        Jt("rows().remove()", "row().remove()", function () {
            var c = this;
            return (
                this.iterator("row", function (t, e, n) {
                    var a,
                        r,
                        o,
                        i,
                        l,
                        s = t.aoData,
                        u = s[e];
                    for (s.splice(e, 1), a = 0, r = s.length; a < r; a++)
                        if (
                            ((l = (o = s[a]).anCells),
                            null !== o.nTr && (o.nTr._DT_RowIndex = a),
                            null !== l)
                        )
                            for (o = 0, i = l.length; o < i; o++)
                                l[o]._DT_CellIndex.row = a;
                    f(t.aiDisplayMaster, e),
                        f(t.aiDisplay, e),
                        f(c[n], e, !1),
                        0 < t._iRecordsDisplay && t._iRecordsDisplay--,
                        Ot(t),
                        (e = t.rowIdFn(u._aData)) !== j && delete t.aIds[e];
                }),
                this.iterator("table", function (t) {
                    for (var e = 0, n = t.aoData.length; e < n; e++)
                        t.aoData[e].idx = e;
                }),
                this
            );
        }),
        Xt("rows.add()", function (o) {
            var t = this.iterator(
                    "table",
                    function (t) {
                        var e,
                            n,
                            a,
                            r = [];
                        for (n = 0, a = o.length; n < a; n++)
                            (e = o[n]).nodeName &&
                            "TR" === e.nodeName.toUpperCase()
                                ? r.push(L(t, e)[0])
                                : r.push(F(t, e));
                        return r;
                    },
                    1
                ),
                e = this.rows(-1);
            return e.pop(), P.merge(e, t), e;
        }),
        Xt("row()", function (t, e) {
            return _e(this.rows(t, e));
        }),
        Xt("row().data()", function (t) {
            var e = this.context;
            return t === j
                ? e.length && this.length
                    ? e[0].aoData[this[0]]._aData
                    : j
                : ((e[0].aoData[this[0]]._aData = t),
                  r(e[0], this[0], "data"),
                  this);
        }),
        Xt("row().node()", function () {
            var t = this.context;
            return (
                (t.length && this.length && t[0].aoData[this[0]].nTr) || null
            );
        }),
        Xt("row.add()", function (e) {
            e instanceof P && e.length && (e = e[0]);
            var t = this.iterator("table", function (t) {
                return e.nodeName && "TR" === e.nodeName.toUpperCase()
                    ? L(t, e)[0]
                    : F(t, e);
            });
            return this.row(t[0]);
        });
    var we = function (t, e) {
            var n = t.context;
            n.length &&
                (n = n[0].aoData[e !== j ? e : t[0]]) &&
                n._details &&
                (n._details.remove(), (n._detailsShow = j), (n._details = j));
        },
        Ce = function (t, e) {
            var n = t.context;
            if (n.length && t.length) {
                var a = n[0].aoData[t[0]];
                if (a._details) {
                    (a._detailsShow = e)
                        ? a._details.insertAfter(a.nTr)
                        : a._details.detach();
                    var i = n[0],
                        r = new Vt(i),
                        l = i.aoData;
                    r.off(
                        "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
                    ),
                        0 < re(l, "_details").length &&
                            (r.on("draw.dt.DT_details", function (t, e) {
                                i === e &&
                                    r
                                        .rows({ page: "current" })
                                        .eq(0)
                                        .each(function (t) {
                                            (t = l[t])._detailsShow &&
                                                t._details.insertAfter(t.nTr);
                                        });
                            }),
                            r.on("column-visibility.dt.DT_details", function (
                                t,
                                e
                            ) {
                                if (i === e)
                                    for (
                                        var n, a = v(e), r = 0, o = l.length;
                                        r < o;
                                        r++
                                    )
                                        (n = l[r])._details &&
                                            n._details
                                                .children("td[colspan]")
                                                .attr("colspan", a);
                            }),
                            r.on("destroy.dt.DT_details", function (t, e) {
                                if (i === e)
                                    for (var n = 0, a = l.length; n < a; n++)
                                        l[n]._details && we(r, n);
                            }));
                }
            }
        };
    Xt("row().child()", function (t, e) {
        var n = this.context;
        if (t === j)
            return n.length && this.length ? n[0].aoData[this[0]]._details : j;
        if (!0 === t) this.child.show();
        else if (!1 === t) we(this);
        else if (n.length && this.length) {
            var r = n[0],
                o = ((n = n[0].aoData[this[0]]), []),
                i = function (t, e) {
                    if (P.isArray(t) || t instanceof P)
                        for (var n = 0, a = t.length; n < a; n++) i(t[n], e);
                    else
                        t.nodeName && "tr" === t.nodeName.toLowerCase()
                            ? o.push(t)
                            : ((n = P("<tr><td/></tr>").addClass(e)),
                              (P("td", n).addClass(e).html(t)[0].colSpan = v(
                                  r
                              )),
                              o.push(n[0]));
                };
            i(t, e),
                n._details && n._details.detach(),
                (n._details = P(o)),
                n._detailsShow && n._details.insertAfter(n.nTr);
        }
        return this;
    }),
        Xt(["row().child.show()", "row().child().show()"], function () {
            return Ce(this, !0), this;
        }),
        Xt(["row().child.hide()", "row().child().hide()"], function () {
            return Ce(this, !1), this;
        }),
        Xt(["row().child.remove()", "row().child().remove()"], function () {
            return we(this), this;
        }),
        Xt("row().child.isShown()", function () {
            var t = this.context;
            return (
                (t.length &&
                    this.length &&
                    t[0].aoData[this[0]]._detailsShow) ||
                !1
            );
        });
    var xe = /^([^:]+):(name|visIdx|visible)$/,
        Ie = function (t, e, n, a, r) {
            (n = []), (a = 0);
            for (var o = r.length; a < o; a++) n.push(R(t, r[a], e));
            return n;
        };
    Xt("columns()", function (e, n) {
        e === j ? (e = "") : P.isPlainObject(e) && ((n = e), (e = ""));
        n = ye(n);
        var t = this.iterator(
            "table",
            function (o) {
                var t = e,
                    i = n,
                    l = o.aoColumns,
                    s = re(l, "sName"),
                    u = re(l, "nTh");
                return De(
                    "column",
                    t,
                    function (n) {
                        var t = te(n);
                        if ("" === n) return ie(l.length);
                        if (null !== t) return [0 <= t ? t : l.length + t];
                        if ("function" == typeof n) {
                            var a = Te(o, i);
                            return P.map(l, function (t, e) {
                                return n(e, Ie(o, e, 0, 0, a), u[e]) ? e : null;
                            });
                        }
                        var r = "string" == typeof n ? n.match(xe) : "";
                        if (r)
                            switch (r[2]) {
                                case "visIdx":
                                case "visible":
                                    if ((t = parseInt(r[1], 10)) < 0) {
                                        var e = P.map(l, function (t, e) {
                                            return t.bVisible ? e : null;
                                        });
                                        return [e[e.length + t]];
                                    }
                                    return [N(o, t)];
                                case "name":
                                    return P.map(s, function (t, e) {
                                        return t === r[1] ? e : null;
                                    });
                                default:
                                    return [];
                            }
                        return n.nodeName && n._DT_CellIndex
                            ? [n._DT_CellIndex.column]
                            : (t = P(u)
                                  .filter(n)
                                  .map(function () {
                                      return P.inArray(this, u);
                                  })
                                  .toArray()).length || !n.nodeName
                            ? t
                            : (t = P(n).closest("*[data-dt-column]")).length
                            ? [t.data("dt-column")]
                            : [];
                    },
                    o,
                    i
                );
            },
            1
        );
        return (t.selector.cols = e), (t.selector.opts = n), t;
    }),
        Jt("columns().header()", "column().header()", function () {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].nTh;
                },
                1
            );
        }),
        Jt("columns().footer()", "column().footer()", function () {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].nTf;
                },
                1
            );
        }),
        Jt("columns().data()", "column().data()", function () {
            return this.iterator("column-rows", Ie, 1);
        }),
        Jt("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].mData;
                },
                1
            );
        }),
        Jt("columns().cache()", "column().cache()", function (o) {
            return this.iterator(
                "column-rows",
                function (t, e, n, a, r) {
                    return oe(
                        t.aoData,
                        r,
                        "search" === o ? "_aFilterData" : "_aSortData",
                        e
                    );
                },
                1
            );
        }),
        Jt("columns().nodes()", "column().nodes()", function () {
            return this.iterator(
                "column-rows",
                function (t, e, n, a, r) {
                    return oe(t.aoData, r, "anCells", e);
                },
                1
            );
        }),
        Jt("columns().visible()", "column().visible()", function (u, n) {
            var t = this.iterator("column", function (t, e) {
                if (u === j) return t.aoColumns[e].bVisible;
                var n,
                    a,
                    r,
                    o = t.aoColumns,
                    i = o[e],
                    l = t.aoData;
                if (u !== j && i.bVisible !== u) {
                    if (u) {
                        var s = P.inArray(!0, re(o, "bVisible"), e + 1);
                        for (n = 0, a = l.length; n < a; n++)
                            (r = l[n].nTr),
                                (o = l[n].anCells),
                                r && r.insertBefore(o[e], o[s] || null);
                    } else P(re(t.aoData, "anCells", e)).detach();
                    (i.bVisible = u), O(t, t.aoHeader), O(t, t.aoFooter), At(t);
                }
            });
            return (
                u !== j &&
                    (this.iterator("column", function (t, e) {
                        kt(t, null, "column-visibility", [t, e, u, n]);
                    }),
                    (n === j || n) && this.columns.adjust()),
                t
            );
        }),
        Jt("columns().indexes()", "column().index()", function (n) {
            return this.iterator(
                "column",
                function (t, e) {
                    return "visible" === n ? u(t, e) : e;
                },
                1
            );
        }),
        Xt("columns.adjust()", function () {
            return this.iterator(
                "table",
                function (t) {
                    H(t);
                },
                1
            );
        }),
        Xt("column.index()", function (t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return N(n, e);
                if ("fromData" === t || "toVisible" === t) return u(n, e);
            }
        }),
        Xt("column()", function (t, e) {
            return _e(this.columns(t, e));
        }),
        Xt("cells()", function (g, t, b) {
            if (
                (P.isPlainObject(g) &&
                    (g.row === j
                        ? ((b = g), (g = null))
                        : ((b = t), (t = null))),
                P.isPlainObject(t) && ((b = t), (t = null)),
                null === t || t === j)
            )
                return this.iterator("table", function (n) {
                    var a,
                        r,
                        o,
                        i,
                        l,
                        s,
                        u,
                        t = g,
                        e = ye(b),
                        c = n.aoData,
                        f = Te(n, e),
                        d = le(oe(c, f, "anCells")),
                        h = P([].concat.apply([], d)),
                        p = n.aoColumns.length;
                    return De(
                        "cell",
                        t,
                        function (t) {
                            var e = "function" == typeof t;
                            if (null === t || t === j || e) {
                                for (r = [], o = 0, i = f.length; o < i; o++)
                                    for (a = f[o], l = 0; l < p; l++)
                                        (s = { row: a, column: l }),
                                            e
                                                ? ((u = c[a]),
                                                  t(
                                                      s,
                                                      R(n, a, l),
                                                      u.anCells
                                                          ? u.anCells[l]
                                                          : null
                                                  ) && r.push(s))
                                                : r.push(s);
                                return r;
                            }
                            return P.isPlainObject(t)
                                ? [t]
                                : (e = h
                                      .filter(t)
                                      .map(function (t, e) {
                                          return {
                                              row: e._DT_CellIndex.row,
                                              column: e._DT_CellIndex.column,
                                          };
                                      })
                                      .toArray()).length || !t.nodeName
                                ? e
                                : (u = P(t).closest("*[data-dt-row]")).length
                                ? [
                                      {
                                          row: u.data("dt-row"),
                                          column: u.data("dt-column"),
                                      },
                                  ]
                                : [];
                        },
                        n,
                        e
                    );
                });
            var n,
                a,
                r,
                o,
                i,
                l = this.columns(t, b),
                s = this.rows(g, b),
                e = this.iterator(
                    "table",
                    function (t, e) {
                        for (n = [], a = 0, r = s[e].length; a < r; a++)
                            for (o = 0, i = l[e].length; o < i; o++)
                                n.push({ row: s[e][a], column: l[e][o] });
                        return n;
                    },
                    1
                );
            return P.extend(e.selector, { cols: t, rows: g, opts: b }), e;
        }),
        Jt("cells().nodes()", "cell().node()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return (t = t.aoData[e]) && t.anCells ? t.anCells[n] : j;
                },
                1
            );
        }),
        Xt("cells().data()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return R(t, e, n);
                },
                1
            );
        }),
        Jt("cells().cache()", "cell().cache()", function (a) {
            return (
                (a = "search" === a ? "_aFilterData" : "_aSortData"),
                this.iterator(
                    "cell",
                    function (t, e, n) {
                        return t.aoData[e][a][n];
                    },
                    1
                )
            );
        }),
        Jt("cells().render()", "cell().render()", function (a) {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return R(t, e, n, a);
                },
                1
            );
        }),
        Jt("cells().indexes()", "cell().index()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return { row: e, column: n, columnVisible: u(t, n) };
                },
                1
            );
        }),
        Jt("cells().invalidate()", "cell().invalidate()", function (a) {
            return this.iterator("cell", function (t, e, n) {
                r(t, e, a, n);
            });
        }),
        Xt("cell()", function (t, e, n) {
            return _e(this.cells(t, e, n));
        }),
        Xt("cell().data()", function (t) {
            var e = this.context,
                n = this[0];
            return t === j
                ? e.length && n.length
                    ? R(e[0], n[0].row, n[0].column)
                    : j
                : (a(e[0], n[0].row, n[0].column, t),
                  r(e[0], n[0].row, "data", n[0].column),
                  this);
        }),
        Xt("order()", function (e, t) {
            var n = this.context;
            return e === j
                ? 0 !== n.length
                    ? n[0].aaSorting
                    : j
                : ("number" == typeof e
                      ? (e = [[e, t]])
                      : e.length &&
                        !P.isArray(e[0]) &&
                        (e = Array.prototype.slice.call(arguments)),
                  this.iterator("table", function (t) {
                      t.aaSorting = e.slice();
                  }));
        }),
        Xt("order.listener()", function (e, n, a) {
            return this.iterator("table", function (t) {
                Ct(t, e, n, a);
            });
        }),
        Xt("order.fixed()", function (e) {
            if (!e) {
                var t = (t = this.context).length ? t[0].aaSortingFixed : j;
                return P.isArray(t) ? { pre: t } : t;
            }
            return this.iterator("table", function (t) {
                t.aaSortingFixed = P.extend(!0, {}, e);
            });
        }),
        Xt(["columns().order()", "column().order()"], function (a) {
            var r = this;
            return this.iterator("table", function (t, e) {
                var n = [];
                P.each(r[e], function (t, e) {
                    n.push([e, a]);
                }),
                    (t.aaSorting = n);
            });
        }),
        Xt("search()", function (e, n, a, r) {
            var t = this.context;
            return e === j
                ? 0 !== t.length
                    ? t[0].oPreviousSearch.sSearch
                    : j
                : this.iterator("table", function (t) {
                      t.oFeatures.bFilter &&
                          $(
                              t,
                              P.extend({}, t.oPreviousSearch, {
                                  sSearch: e + "",
                                  bRegex: null !== n && n,
                                  bSmart: null === a || a,
                                  bCaseInsensitive: null === r || r,
                              }),
                              1
                          );
                  });
        }),
        Jt("columns().search()", "column().search()", function (a, r, o, i) {
            return this.iterator("column", function (t, e) {
                var n = t.aoPreSearchCols;
                if (a === j) return n[e].sSearch;
                t.oFeatures.bFilter &&
                    (P.extend(n[e], {
                        sSearch: a + "",
                        bRegex: null !== r && r,
                        bSmart: null === o || o,
                        bCaseInsensitive: null === i || i,
                    }),
                    $(t, t.oPreviousSearch, 1));
            });
        }),
        Xt("state()", function () {
            return this.context.length ? this.context[0].oSavedState : null;
        }),
        Xt("state.clear()", function () {
            return this.iterator("table", function (t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {});
            });
        }),
        Xt("state.loaded()", function () {
            return this.context.length ? this.context[0].oLoadedState : null;
        }),
        Xt("state.save()", function () {
            return this.iterator("table", function (t) {
                At(t);
            });
        }),
        (qt.versionCheck = qt.fnVersionCheck = function (t) {
            for (
                var e,
                    n,
                    a = qt.version.split("."),
                    r = 0,
                    o = (t = t.split(".")).length;
                r < o;
                r++
            )
                if (
                    (e = parseInt(a[r], 10) || 0) !==
                    (n = parseInt(t[r], 10) || 0)
                )
                    return n < e;
            return !0;
        }),
        (qt.isDataTable = qt.fnIsDataTable = function (t) {
            var r = P(t).get(0),
                o = !1;
            return (
                t instanceof qt.Api ||
                (P.each(qt.settings, function (t, e) {
                    var n = e.nScrollHead ? P("table", e.nScrollHead)[0] : null,
                        a = e.nScrollFoot ? P("table", e.nScrollFoot)[0] : null;
                    (e.nTable !== r && n !== r && a !== r) || (o = !0);
                }),
                o)
            );
        }),
        (qt.tables = qt.fnTables = function (e) {
            var t = !1;
            P.isPlainObject(e) && ((t = e.api), (e = e.visible));
            var n = P.map(qt.settings, function (t) {
                if (!e || (e && P(t.nTable).is(":visible"))) return t.nTable;
            });
            return t ? new Vt(n) : n;
        }),
        (qt.camelToHungarian = D),
        Xt("$()", function (t, e) {
            var n = this.rows(e).nodes();
            n = P(n);
            return P([].concat(n.filter(t).toArray(), n.find(t).toArray()));
        }),
        P.each(["on", "one", "off"], function (t, n) {
            Xt(n + "()", function () {
                var t = Array.prototype.slice.call(arguments);
                t[0] = P.map(t[0].split(/\s/), function (t) {
                    return t.match(/\.dt\b/) ? t : t + ".dt";
                }).join(" ");
                var e = P(this.tables().nodes());
                return e[n].apply(e, t), this;
            });
        }),
        Xt("clear()", function () {
            return this.iterator("table", function (t) {
                l(t);
            });
        }),
        Xt("settings()", function () {
            return new Vt(this.context, this.context);
        }),
        Xt("init()", function () {
            var t = this.context;
            return t.length ? t[0].oInit : null;
        }),
        Xt("data()", function () {
            return this.iterator("table", function (t) {
                return re(t.aoData, "_aData");
            }).flatten();
        }),
        Xt("destroy()", function (f) {
            return (
                (f = f || !1),
                this.iterator("table", function (e) {
                    var n,
                        t = e.nTableWrapper.parentNode,
                        a = e.oClasses,
                        r = e.nTable,
                        o = e.nTBody,
                        i = e.nTHead,
                        l = e.nTFoot,
                        s = P(r),
                        u = ((o = P(o)), P(e.nTableWrapper)),
                        c = P.map(e.aoData, function (t) {
                            return t.nTr;
                        });
                    (e.bDestroying = !0),
                        kt(e, "aoDestroyCallback", "destroy", [e]),
                        f || new Vt(e).columns().visible(!0),
                        u.off(".DT").find(":not(tbody *)").off(".DT"),
                        P(m).off(".DT-" + e.sInstance),
                        r != i.parentNode &&
                            (s.children("thead").detach(), s.append(i)),
                        l &&
                            r != l.parentNode &&
                            (s.children("tfoot").detach(), s.append(l)),
                        (e.aaSorting = []),
                        (e.aaSortingFixed = []),
                        xt(e),
                        P(c).removeClass(e.asStripeClasses.join(" ")),
                        P("th, td", i).removeClass(
                            a.sSortable +
                                " " +
                                a.sSortableAsc +
                                " " +
                                a.sSortableDesc +
                                " " +
                                a.sSortableNone
                        ),
                        o.children().detach(),
                        o.append(c),
                        s[(i = f ? "remove" : "detach")](),
                        u[i](),
                        !f &&
                            t &&
                            (t.insertBefore(r, e.nTableReinsertBefore),
                            s
                                .css("width", e.sDestroyWidth)
                                .removeClass(a.sTable),
                            (n = e.asDestroyStripes.length) &&
                                o.children().each(function (t) {
                                    P(this).addClass(e.asDestroyStripes[t % n]);
                                })),
                        -1 !== (t = P.inArray(e, qt.settings)) &&
                            qt.settings.splice(t, 1);
                })
            );
        }),
        P.each(["column", "row", "cell"], function (t, s) {
            Xt(s + "s().every()", function (o) {
                var i = this.selector.opts,
                    l = this;
                return this.iterator(s, function (t, e, n, a, r) {
                    o.call(
                        l[s](e, "cell" === s ? n : i, "cell" === s ? i : j),
                        e,
                        n,
                        a,
                        r
                    );
                });
            });
        }),
        Xt("i18n()", function (t, e, n) {
            var a = this.context[0];
            return (
                (t = k(t)(a.oLanguage)) === j && (t = e),
                n !== j && P.isPlainObject(t) && (t = t[n] !== j ? t[n] : t._),
                t.replace("%d", n)
            );
        }),
        (qt.version =
            "http://puffintheme.com/demo/oculux/html/assets/bundles/1.10.16"),
        (qt.settings = []),
        (qt.models = {}),
        (qt.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0,
        }),
        (qt.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1,
        }),
        (qt.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null,
        }),
        (qt.defaults = {
            aaData: null,
            aaSorting: [[0, "asc"]],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function (t) {
                return t
                    .toString()
                    .replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        this.oLanguage.sThousands
                    );
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function (t) {
                try {
                    return JSON.parse(
                        (-1 === t.iStateDuration
                            ? sessionStorage
                            : localStorage
                        ).getItem(
                            "DataTables_" +
                                t.sInstance +
                                "_" +
                                location.pathname
                        )
                    );
                } catch (t) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function (t, e) {
                try {
                    (-1 === t.iStateDuration
                        ? sessionStorage
                        : localStorage
                    ).setItem(
                        "DataTables_" + t.sInstance + "_" + location.pathname,
                        JSON.stringify(e)
                    );
                } catch (t) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending",
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Sau",
                    sPrevious: "Trước",
                },
                sEmptyTable: "No data available in table",
                sInfo: "Hiển thị _START_ đến _END_ trong _TOTAL_ mục",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Hiển thị _MENU_ mục",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Tìm kiếm:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found",
            },
            oSearch: P.extend({}, qt.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId",
        }),
        o(qt.defaults),
        (qt.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null,
        }),
        o(qt.defaults.column),
        (qt.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null,
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null,
            },
            oLanguage: { fnInfoCallback: null },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1,
                barWidth: 0,
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: j,
            oAjaxData: j,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function () {
                return "ssp" == Wt(this)
                    ? 1 * this._iRecordsTotal
                    : this.aiDisplayMaster.length;
            },
            fnRecordsDisplay: function () {
                return "ssp" == Wt(this)
                    ? 1 * this._iRecordsDisplay
                    : this.aiDisplay.length;
            },
            fnDisplayEnd: function () {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    a = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate;
                return r.bServerSide
                    ? !1 === o || -1 === t
                        ? e + a
                        : Math.min(e + t, this._iRecordsDisplay)
                    : !o || a < n || -1 === t
                    ? a
                    : n;
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null,
        }),
        (qt.ext = Ut = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: { cell: [], column: [], row: [] },
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: { pageButton: {}, header: {} },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: qt.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: qt.version,
        }),
        P.extend(Ut, {
            afnFiltering: Ut.search,
            aTypes: Ut.type.detect,
            ofnSearch: Ut.type.search,
            oSort: Ut.type.order,
            afnSortData: Ut.order,
            aoFeatures: Ut.feature,
            oApi: Ut.internal,
            oStdClasses: Ut.classes,
            oPagination: Ut.pager,
        }),
        P.extend(qt.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: "",
        });
    var Ae = qt.ext.pager;
    P.extend(Ae, {
        simple: function () {
            return ["previous", "next"];
        },
        full: function () {
            return ["first", "previous", "next", "last"];
        },
        numbers: function (t, e) {
            return [Et(t, e)];
        },
        simple_numbers: function (t, e) {
            return ["previous", Et(t, e), "next"];
        },
        full_numbers: function (t, e) {
            return ["first", "previous", Et(t, e), "next", "last"];
        },
        first_last_numbers: function (t, e) {
            return ["first", Et(t, e), "last"];
        },
        _numbers: Et,
        numbers_length: 7,
    }),
        P.extend(!0, qt.ext.renderer, {
            pageButton: {
                _: function (l, t, s, e, u, c) {
                    var f,
                        d,
                        n,
                        h = l.oClasses,
                        p = l.oLanguage.oPaginate,
                        g = l.oLanguage.oAria.paginate || {},
                        b = 0,
                        m = function (t, e) {
                            var n,
                                a,
                                r,
                                o,
                                i = function (t) {
                                    ct(l, t.data.action, !0);
                                };
                            for (n = 0, a = e.length; n < a; n++)
                                if (((o = e[n]), P.isArray(o)))
                                    (r = P(
                                        "<" + (o.DT_el || "div") + "/>"
                                    ).appendTo(t)),
                                        m(r, o);
                                else {
                                    switch (((f = null), (d = ""), o)) {
                                        case "ellipsis":
                                            t.append(
                                                '<span class="ellipsis">&#x2026;</span>'
                                            );
                                            break;
                                        case "first":
                                            (f = p.sFirst),
                                                (d =
                                                    o +
                                                    (0 < u
                                                        ? ""
                                                        : " " +
                                                          h.sPageButtonDisabled));
                                            break;
                                        case "previous":
                                            (f = p.sPrevious),
                                                (d =
                                                    o +
                                                    (0 < u
                                                        ? ""
                                                        : " " +
                                                          h.sPageButtonDisabled));
                                            break;
                                        case "next":
                                            (f = p.sNext),
                                                (d =
                                                    o +
                                                    (u < c - 1
                                                        ? ""
                                                        : " " +
                                                          h.sPageButtonDisabled));
                                            break;
                                        case "last":
                                            (f = p.sLast),
                                                (d =
                                                    o +
                                                    (u < c - 1
                                                        ? ""
                                                        : " " +
                                                          h.sPageButtonDisabled));
                                            break;
                                        default:
                                            (f = o + 1),
                                                (d =
                                                    u === o
                                                        ? h.sPageButtonActive
                                                        : "");
                                    }
                                    null !== f &&
                                        (Ht(
                                            (r = P("<a>", {
                                                class: h.sPageButton + " " + d,
                                                "aria-controls": l.sTableId,
                                                "aria-label": g[o],
                                                "data-dt-idx": b,
                                                tabindex: l.iTabIndex,
                                                id:
                                                    0 === s &&
                                                    "string" == typeof o
                                                        ? l.sTableId + "_" + o
                                                        : null,
                                            })
                                                .html(f)
                                                .appendTo(t)),
                                            { action: o },
                                            i
                                        ),
                                        b++);
                                }
                        };
                    try {
                        n = P(t).find(S.activeElement).data("dt-idx");
                    } catch (t) {}
                    m(P(t).empty(), e),
                        n !== j &&
                            P(t)
                                .find("[data-dt-idx=" + n + "]")
                                .focus();
                },
            },
        }),
        P.extend(qt.ext.type.detect, [
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return ne(t, n) ? "num" + n : null;
            },
            function (t) {
                if (t && !(t instanceof Date) && !Yt.test(t)) return null;
                var e = Date.parse(t);
                return (null !== e && !isNaN(e)) || Kt(t) ? "date" : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return ne(t, n, !0) ? "num-fmt" + n : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return ae(t, n) ? "html-num" + n : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return ae(t, n, !0) ? "html-num-fmt" + n : null;
            },
            function (t) {
                return Kt(t) || ("string" == typeof t && -1 !== t.indexOf("<"))
                    ? "html"
                    : null;
            },
        ]),
        P.extend(qt.ext.type.search, {
            html: function (t) {
                return Kt(t)
                    ? t
                    : "string" == typeof t
                    ? t.replace($t, " ").replace(zt, "")
                    : "";
            },
            string: function (t) {
                return Kt(t)
                    ? t
                    : "string" == typeof t
                    ? t.replace($t, " ")
                    : t;
            },
        });
    var Fe = function (t, e, n, a) {
        return 0 === t || (t && "-" !== t)
            ? (e && (t = ee(t, e)),
              t.replace &&
                  (n && (t = t.replace(n, "")), a && (t = t.replace(a, ""))),
              1 * t)
            : -1 / 0;
    };
    P.extend(Ut.type.order, {
        "date-pre": function (t) {
            return Date.parse(t) || -1 / 0;
        },
        "html-pre": function (t) {
            return Kt(t)
                ? ""
                : t.replace
                ? t.replace(/<.*?>/g, "").toLowerCase()
                : t + "";
        },
        "string-pre": function (t) {
            return Kt(t)
                ? ""
                : "string" == typeof t
                ? t.toLowerCase()
                : t.toString
                ? t.toString()
                : "";
        },
        "string-asc": function (t, e) {
            return t < e ? -1 : e < t ? 1 : 0;
        },
        "string-desc": function (t, e) {
            return t < e ? 1 : e < t ? -1 : 0;
        },
    }),
        Bt(""),
        P.extend(!0, qt.ext.renderer, {
            header: {
                _: function (r, o, i, l) {
                    P(r.nTable).on(
                        "http://puffintheme.com/demo/oculux/html/assets/bundles/order.dt.DT",
                        function (t, e, n, a) {
                            r === e &&
                                ((t = i.idx),
                                o
                                    .removeClass(
                                        i.sSortingClass +
                                            " " +
                                            l.sSortAsc +
                                            " " +
                                            l.sSortDesc
                                    )
                                    .addClass(
                                        "asc" == a[t]
                                            ? l.sSortAsc
                                            : "desc" == a[t]
                                            ? l.sSortDesc
                                            : i.sSortingClass
                                    ));
                        }
                    );
                },
                jqueryui: function (r, o, i, l) {
                    P("<div/>")
                        .addClass(l.sSortJUIWrapper)
                        .append(o.contents())
                        .append(
                            P("<span/>").addClass(
                                l.sSortIcon + " " + i.sSortingClassJUI
                            )
                        )
                        .appendTo(o),
                        P(r.nTable).on(
                            "http://puffintheme.com/demo/oculux/html/assets/bundles/order.dt.DT",
                            function (t, e, n, a) {
                                r === e &&
                                    ((t = i.idx),
                                    o
                                        .removeClass(
                                            l.sSortAsc + " " + l.sSortDesc
                                        )
                                        .addClass(
                                            "asc" == a[t]
                                                ? l.sSortAsc
                                                : "desc" == a[t]
                                                ? l.sSortDesc
                                                : i.sSortingClass
                                        ),
                                    o
                                        .find("span." + l.sSortIcon)
                                        .removeClass(
                                            l.sSortJUIAsc +
                                                " " +
                                                l.sSortJUIDesc +
                                                " " +
                                                l.sSortJUI +
                                                " " +
                                                l.sSortJUIAscAllowed +
                                                " " +
                                                l.sSortJUIDescAllowed
                                        )
                                        .addClass(
                                            "asc" == a[t]
                                                ? l.sSortJUIAsc
                                                : "desc" == a[t]
                                                ? l.sSortJUIDesc
                                                : i.sSortingClassJUI
                                        ));
                            }
                        );
                },
            },
        });
    var Le = function (t) {
        return "string" == typeof t
            ? t
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
            : t;
    };
    return (
        (qt.render = {
            number: function (a, r, o, i, l) {
                return {
                    display: function (t) {
                        if ("number" != typeof t && "string" != typeof t)
                            return t;
                        var e = t < 0 ? "-" : "",
                            n = parseFloat(t);
                        return isNaN(n)
                            ? Le(t)
                            : ((n = n.toFixed(o)),
                              (t = Math.abs(n)),
                              (n = parseInt(t, 10)),
                              (t = o
                                  ? r + (t - n).toFixed(o).substring(2)
                                  : ""),
                              e +
                                  (i || "") +
                                  n
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, a) +
                                  t +
                                  (l || ""));
                    },
                };
            },
            text: function () {
                return { display: Le };
            },
        }),
        P.extend(qt.ext.internal, {
            _fnExternApiFunc: e,
            _fnBuildAjax: V,
            _fnAjaxUpdate: X,
            _fnAjaxParameters: t,
            _fnAjaxUpdateDraw: J,
            _fnAjaxDataSrc: q,
            _fnAddColumn: C,
            _fnColumnOptions: x,
            _fnAdjustColumnSizing: H,
            _fnVisibleToColumnIndex: N,
            _fnColumnIndexToVisible: u,
            _fnVisbleColumns: v,
            _fnGetColumns: I,
            _fnColumnTypes: i,
            _fnApplyColumnDefs: A,
            _fnHungarianMap: o,
            _fnCamelToHungarian: D,
            _fnLanguageCompat: y,
            _fnBrowserDetect: w,
            _fnAddData: F,
            _fnAddTr: L,
            _fnNodeToDataIndex: function (t, e) {
                return e._DT_RowIndex !== j ? e._DT_RowIndex : null;
            },
            _fnNodeToColumnIndex: function (t, e, n) {
                return P.inArray(n, t.aoData[e].anCells);
            },
            _fnGetCellData: R,
            _fnSetCellData: a,
            _fnSplitObjNotation: c,
            _fnGetObjectDataFn: k,
            _fnSetObjectDataFn: p,
            _fnGetDataMaster: h,
            _fnClearTable: l,
            _fnDeleteIndex: f,
            _fnInvalidate: r,
            _fnGetRowElements: s,
            _fnCreateTr: g,
            _fnBuildHead: b,
            _fnDrawHead: O,
            _fnDraw: M,
            _fnReDraw: W,
            _fnAddOptionsHtml: E,
            _fnDetectHeader: B,
            _fnGetUniqueThs: U,
            _fnFeatureHtmlFilter: G,
            _fnFilterComplete: $,
            _fnFilterCustom: z,
            _fnFilterColumn: Y,
            _fnFilter: Z,
            _fnFilterCreateSearch: Q,
            _fnEscapeRegex: de,
            _fnFilterData: K,
            _fnFeatureHtmlInfo: nt,
            _fnUpdateInfo: at,
            _fnInfoMacros: rt,
            _fnInitialise: ot,
            _fnInitComplete: it,
            _fnLengthChange: lt,
            _fnFeatureHtmlLength: st,
            _fnFeatureHtmlPaginate: ut,
            _fnPageChange: ct,
            _fnFeatureHtmlProcessing: ft,
            _fnProcessingDisplay: dt,
            _fnFeatureHtmlTable: ht,
            _fnScrollDraw: pt,
            _fnApplyToChildren: gt,
            _fnCalculateColumnWidths: bt,
            _fnThrottle: be,
            _fnConvertToWidth: mt,
            _fnGetWidestNode: St,
            _fnGetMaxLenString: vt,
            _fnStringToCss: Dt,
            _fnSortFlatten: yt,
            _fnSort: _t,
            _fnSortAria: Tt,
            _fnSortListener: wt,
            _fnSortAttachListener: Ct,
            _fnSortingClasses: xt,
            _fnSortData: It,
            _fnSaveState: At,
            _fnLoadState: Ft,
            _fnSettingsFromNode: Lt,
            _fnLog: Rt,
            _fnMap: Pt,
            _fnBindAction: Ht,
            _fnCallbackReg: Nt,
            _fnCallbackFire: kt,
            _fnLengthOverflow: Ot,
            _fnRenderer: Mt,
            _fnDataSource: Wt,
            _fnRowAttributes: d,
            _fnCalculateEnd: function () {},
        }),
        (((P.fn.dataTable = qt).$ = P).fn.dataTableSettings = qt.settings),
        (P.fn.dataTableExt = qt.ext),
        (P.fn.DataTable = function (t) {
            return P(this).dataTable(t).api();
        }),
        P.each(qt, function (t, e) {
            P.fn.DataTable[t] = e;
        }),
        P.fn.dataTable
    );
}),
    (function (n) {
        "function" == typeof define && define.amd
            ? define([
                  "jquery",
                  "http://puffintheme.com/demo/oculux/html/assets/bundles/datatables.net",
              ], function (t) {
                  return n(t, window, document);
              })
            : "object" == typeof exports
            ? (module.exports = function (t, e) {
                  return (
                      t || (t = window),
                      (e && e.fn.dataTable) ||
                          (e = require("http://puffintheme.com/demo/oculux/html/assets/bundles/datatables.net")(
                              t,
                              e
                          ).$),
                      n(e, t, t.document)
                  );
              })
            : n(jQuery, window, document);
    })(function (v, t, a, r) {
        var o = v.fn.dataTable;
        return (
            v.extend(!0, o.defaults, {
                dom:
                    "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                renderer: "bootstrap",
            }),
            v.extend(o.ext.classes, {
                sWrapper: "dataTables_wrapper dt-bootstrap4",
                sFilterInput: "form-control",
                sLengthSelect: "form-control",
                sProcessing: "dataTables_processing card",
                sPageButton: "paginate_button page-item",
            }),
            (o.ext.renderer.pageButton.bootstrap = function (l, t, s, e, u, c) {
                var f,
                    d,
                    n,
                    h = new o.Api(l),
                    p = l.oClasses,
                    g = l.oLanguage.oPaginate,
                    b = l.oLanguage.oAria.paginate || {},
                    m = 0,
                    S = function (t, e) {
                        var n,
                            a,
                            r,
                            o,
                            i = function (t) {
                                t.preventDefault(),
                                    !v(t.currentTarget).hasClass("disabled") &&
                                        h.page() != t.data.action &&
                                        h.page(t.data.action).draw("page");
                            };
                        for (n = 0, a = e.length; n < a; n++)
                            if (((o = e[n]), v.isArray(o))) S(t, o);
                            else {
                                switch (((d = f = ""), o)) {
                                    case "ellipsis":
                                        (f = "&#x2026;"), (d = "disabled");
                                        break;
                                    case "first":
                                        (f = g.sFirst),
                                            (d =
                                                o + (0 < u ? "" : " disabled"));
                                        break;
                                    case "previous":
                                        (f = g.sPrevious),
                                            (d =
                                                o + (0 < u ? "" : " disabled"));
                                        break;
                                    case "next":
                                        (f = g.sNext),
                                            (d =
                                                o +
                                                (u < c - 1 ? "" : " disabled"));
                                        break;
                                    case "last":
                                        (f = g.sLast),
                                            (d =
                                                o +
                                                (u < c - 1 ? "" : " disabled"));
                                        break;
                                    default:
                                        (f = o + 1),
                                            (d = u === o ? "active" : "");
                                }
                                f &&
                                    ((r = v("<li>", {
                                        class: p.sPageButton + " " + d,
                                        id:
                                            0 === s && "string" == typeof o
                                                ? l.sTableId + "_" + o
                                                : null,
                                    })
                                        .append(
                                            v("<a>", {
                                                href: "#",
                                                "aria-controls": l.sTableId,
                                                "aria-label": b[o],
                                                "data-dt-idx": m,
                                                tabindex: l.iTabIndex,
                                                class: "page-link",
                                            }).html(f)
                                        )
                                        .appendTo(t)),
                                    l.oApi._fnBindAction(r, { action: o }, i),
                                    m++);
                            }
                    };
                try {
                    n = v(t).find(a.activeElement).data("dt-idx");
                } catch (t) {}
                S(
                    v(t)
                        .empty()
                        .html('<ul class="pagination"/>')
                        .children("ul"),
                    e
                ),
                    n !== r &&
                        v(t)
                            .find("[data-dt-idx=" + n + "]")
                            .focus();
            }),
            o
        );
    });
