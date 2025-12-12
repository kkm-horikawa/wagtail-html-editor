"""
Tests for EnhancedHTMLBlock.
"""

from wagtail_html_editor import EnhancedHTMLBlock


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
