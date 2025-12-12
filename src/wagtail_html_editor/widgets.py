"""
Custom widgets for wagtail-html-editor.
"""

import json
from typing import Any

from django import forms

from wagtail_html_editor.settings import get_config


class EnhancedHTMLWidget(forms.Textarea):
    """
    A textarea widget that integrates with CodeMirror 6 editor.

    This widget renders a standard textarea that will be enhanced
    with CodeMirror 6 by the JavaScript initialization code.
    """

    template_name = "wagtail_html_editor/widgets/enhanced_html.html"

    def __init__(self, attrs: dict[str, str] | None = None) -> None:
        default_attrs = {
            "data-wagtail-html-editor": "true",
            "rows": "10",
        }
        if attrs:
            default_attrs.update(attrs)
        super().__init__(attrs=default_attrs)

    def get_context(
        self, name: str, value: Any, attrs: dict[str, Any] | None
    ) -> dict[str, Any]:
        """Add configuration to widget context."""
        context = super().get_context(name, value, attrs)
        # Add config as data attribute
        config = get_config()
        context["widget"]["attrs"]["data-config"] = json.dumps(config)
        return context

    class Media:
        css = {
            "all": ("wagtail_html_editor/css/wagtail-html-editor.css",),
        }
        js = ("wagtail_html_editor/js/wagtail-html-editor.iife.js",)
