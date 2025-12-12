"""
Wagtail hooks for wagtail-html-editor.

This module registers the telepath adapter and ensures required
JavaScript is loaded in the Wagtail admin.
"""

# Import telepath module to ensure adapter is registered at startup
import wagtail_html_editor.telepath  # noqa: F401
