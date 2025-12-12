"""
wagtail-html-editor: Enhanced HTML editor block for Wagtail CMS.

This package provides a VS Code-like HTML editing experience for Wagtail
StreamField blocks, featuring syntax highlighting, Emmet support,
and fullscreen mode.
"""

__version__ = "0.1.0.dev0"

from wagtail_html_editor.blocks import EnhancedHTMLBlock

__all__ = ["EnhancedHTMLBlock"]
