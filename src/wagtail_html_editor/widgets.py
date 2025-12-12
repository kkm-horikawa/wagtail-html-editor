"""
Custom widgets for wagtail-html-editor.
"""

from django import forms


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

    class Media:
        css = {
            "all": ("wagtail_html_editor/css/wagtail-html-editor.css",),
        }
        js = ("wagtail_html_editor/js/wagtail-html-editor.iife.js",)
