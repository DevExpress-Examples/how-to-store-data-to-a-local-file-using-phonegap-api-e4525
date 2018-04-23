window.Application1 = window.Application1 || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: Application1,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: Application1.config.defaultLayout,
        navigation: Application1.config.navigation
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });
});
