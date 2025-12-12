"""
Wagtail Telepath adapter for EnhancedHTMLWidget.

This module provides StreamField integration by registering a Telepath
adapter that allows the widget to be dynamically created on the client side.
"""

from django import forms
from wagtail.admin.telepath import register
from wagtail.admin.telepath.widgets import WidgetAdapter

from wagtail_html_editor.widgets import EnhancedHTMLWidget


class EnhancedHTMLWidgetAdapter(WidgetAdapter):  # type: ignore[misc]
    """
    Telepath adapter for EnhancedHTMLWidget.

    This adapter serializes the widget's HTML template for client-side
    rendering and registers it with the JavaScript telepath registry.
    """

    js_constructor = "wagtail_html_editor.widgets.EnhancedHTMLWidget"

    def js_args(self, widget: forms.Widget) -> list[str]:
        """
        Return arguments to pass to the JavaScript constructor.

        Args:
            widget: The EnhancedHTMLWidget instance

        Returns:
            List containing the rendered HTML template with placeholders
        """
        return [
            widget.render("__NAME__", None, attrs={"id": "__ID__"}),
        ]


# Register the adapter
register(EnhancedHTMLWidgetAdapter(), EnhancedHTMLWidget)
