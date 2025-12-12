"""
Enhanced HTML blocks for Wagtail StreamField.
"""

from typing import Any

from wagtail.blocks import RawHTMLBlock

from wagtail_html_editor.widgets import EnhancedHTMLWidget


class EnhancedHTMLBlock(RawHTMLBlock):  # type: ignore[misc]
    """
    An enhanced HTML block with CodeMirror 6 editor integration.

    Features:
    - Syntax highlighting for HTML/CSS/JavaScript
    - Emmet abbreviation support
    - Auto-indentation
    - Dark/Light theme support
    - Fullscreen editing mode

    Usage:
        from wagtail_html_editor import EnhancedHTMLBlock

        class MyPage(Page):
            body = StreamField([
                ('html', EnhancedHTMLBlock()),
            ])
    """

    def __init__(
        self,
        required: bool = True,
        help_text: str = "",
        max_length: int | None = None,
        min_length: int | None = None,
        validators: list[Any] | None = None,
        **kwargs: Any,
    ) -> None:
        super().__init__(
            required=required,
            help_text=help_text,
            max_length=max_length,
            min_length=min_length,
            validators=validators or [],
            **kwargs,
        )
        # Replace the widget with our enhanced widget
        self.field.widget = EnhancedHTMLWidget()

    class Meta:
        icon = "code"
        label = "HTML"

    def get_form_state(self, value: Any) -> str:
        """Return the value as a string for form state."""
        return str(value) if value else ""
