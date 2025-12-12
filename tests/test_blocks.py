"""
Tests for EnhancedHTMLBlock.
"""

from wagtail_html_editor import EnhancedHTMLBlock
from wagtail_html_editor.widgets import EnhancedHTMLWidget


class TestEnhancedHTMLBlock:
    """Tests for EnhancedHTMLBlock."""

    def test_block_instantiation(self):
        """Test that EnhancedHTMLBlock can be instantiated."""
        block = EnhancedHTMLBlock()
        assert block is not None

    def test_block_meta_icon(self):
        """Test that the block has the correct icon."""
        block = EnhancedHTMLBlock()
        assert block.meta.icon == "code"

    def test_block_meta_label(self):
        """Test that the block has the correct label."""
        block = EnhancedHTMLBlock()
        assert block.meta.label == "HTML"

    def test_block_renders_html(self):
        """Test that the block renders HTML content."""
        block = EnhancedHTMLBlock()
        html = "<p>Hello, World!</p>"
        result = block.render(html)
        assert html in result

    def test_block_uses_enhanced_widget(self):
        """Test that the block uses EnhancedHTMLWidget."""
        block = EnhancedHTMLBlock()
        assert isinstance(block.field.widget, EnhancedHTMLWidget)

    def test_get_form_state_with_value(self):
        """Test get_form_state returns string when value is provided."""
        block = EnhancedHTMLBlock()
        result = block.get_form_state("<p>Test</p>")
        assert result == "<p>Test</p>"

    def test_get_form_state_with_empty_string(self):
        """Test get_form_state returns empty string for empty value."""
        block = EnhancedHTMLBlock()
        result = block.get_form_state("")
        assert result == ""

    def test_get_form_state_with_none(self):
        """Test get_form_state returns empty string for None value."""
        block = EnhancedHTMLBlock()
        result = block.get_form_state(None)
        assert result == ""


class TestEnhancedHTMLWidget:
    """Tests for EnhancedHTMLWidget."""

    def test_widget_instantiation(self):
        """Test that EnhancedHTMLWidget can be instantiated."""
        widget = EnhancedHTMLWidget()
        assert widget is not None

    def test_widget_default_attrs(self):
        """Test that widget has correct default attributes."""
        widget = EnhancedHTMLWidget()
        assert widget.attrs.get("data-wagtail-html-editor") == "true"
        assert widget.attrs.get("rows") == "10"

    def test_widget_custom_attrs(self):
        """Test that widget accepts custom attributes."""
        widget = EnhancedHTMLWidget(attrs={"class": "custom-class", "rows": "20"})
        assert widget.attrs.get("class") == "custom-class"
        assert widget.attrs.get("rows") == "20"
        assert widget.attrs.get("data-wagtail-html-editor") == "true"

    def test_widget_template_name(self):
        """Test that widget uses correct template."""
        widget = EnhancedHTMLWidget()
        assert widget.template_name == "wagtail_html_editor/widgets/enhanced_html.html"

    def test_widget_media_css(self):
        """Test that widget includes CSS."""
        widget = EnhancedHTMLWidget()
        css = widget.media._css.get("all", ())
        assert "wagtail_html_editor/css/wagtail-html-editor.css" in css

    def test_widget_media_js(self):
        """Test that widget includes JavaScript."""
        widget = EnhancedHTMLWidget()
        js = widget.media._js
        assert "wagtail_html_editor/js/wagtail-html-editor.iife.js" in js
