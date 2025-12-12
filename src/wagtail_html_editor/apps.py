"""
Django app configuration for wagtail-html-editor.
"""

from django.apps import AppConfig


class WagtailHtmlEditorConfig(AppConfig):
    """Django app configuration for wagtail-html-editor."""

    name = "wagtail_html_editor"
    label = "wagtail_html_editor"
    verbose_name = "Wagtail HTML Editor"
    default_auto_field = "django.db.models.BigAutoField"
