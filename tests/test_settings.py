"""Tests for wagtail_html_editor.settings module."""

import pytest
from django.core.exceptions import ImproperlyConfigured
from django.test import override_settings

from wagtail_html_editor.settings import (
    get_config,
    get_emmet_enabled,
    get_indent_size,
    get_indent_with_tabs,
    get_theme,
)


class TestGetConfig:
    """Tests for get_config function."""

    def test_default_config(self) -> None:
        """Test that default config is returned when no settings."""
        config = get_config()
        assert config["emmet"] is True
        assert config["indent_size"] == 2
        assert config["indent_with_tabs"] is False
        assert config["theme"] == "auto"

    @override_settings(WAGTAIL_HTML_EDITOR={"emmet": False})
    def test_override_emmet(self) -> None:
        """Test overriding emmet setting."""
        config = get_config()
        assert config["emmet"] is False

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_size": 4})
    def test_override_indent_size(self) -> None:
        """Test overriding indent_size setting."""
        config = get_config()
        assert config["indent_size"] == 4

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_with_tabs": True})
    def test_override_indent_with_tabs(self) -> None:
        """Test overriding indent_with_tabs setting."""
        config = get_config()
        assert config["indent_with_tabs"] is True

    @override_settings(WAGTAIL_HTML_EDITOR={"theme": "dark"})
    def test_override_theme(self) -> None:
        """Test overriding theme setting."""
        config = get_config()
        assert config["theme"] == "dark"

    @override_settings(WAGTAIL_HTML_EDITOR="invalid")
    def test_invalid_config_type(self) -> None:
        """Test that non-dict config raises error."""
        with pytest.raises(ImproperlyConfigured, match="must be a dictionary"):
            get_config()

    @override_settings(WAGTAIL_HTML_EDITOR={"emmet": "yes"})
    def test_invalid_emmet_type(self) -> None:
        """Test that non-boolean emmet raises error."""
        with pytest.raises(ImproperlyConfigured, match="emmet.*must be a boolean"):
            get_config()

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_size": 3})
    def test_invalid_indent_size(self) -> None:
        """Test that invalid indent_size raises error."""
        with pytest.raises(ImproperlyConfigured, match="indent_size.*must be one of"):
            get_config()

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_with_tabs": "yes"})
    def test_invalid_indent_with_tabs_type(self) -> None:
        """Test that non-boolean indent_with_tabs raises error."""
        with pytest.raises(
            ImproperlyConfigured, match="indent_with_tabs.*must be a boolean"
        ):
            get_config()

    @override_settings(WAGTAIL_HTML_EDITOR={"theme": "blue"})
    def test_invalid_theme(self) -> None:
        """Test that invalid theme raises error."""
        with pytest.raises(ImproperlyConfigured, match="theme.*must be one of"):
            get_config()

    @override_settings(WAGTAIL_HTML_EDITOR={"unknown_setting": True})
    def test_unknown_setting_warning(self) -> None:
        """Test that unknown settings trigger a warning."""
        with pytest.warns(UserWarning, match="Unknown WAGTAIL_HTML_EDITOR settings"):
            get_config()


class TestHelperFunctions:
    """Tests for individual helper functions."""

    def test_get_emmet_enabled_default(self) -> None:
        """Test get_emmet_enabled returns default."""
        assert get_emmet_enabled() is True

    @override_settings(WAGTAIL_HTML_EDITOR={"emmet": False})
    def test_get_emmet_enabled_override(self) -> None:
        """Test get_emmet_enabled with override."""
        assert get_emmet_enabled() is False

    def test_get_indent_size_default(self) -> None:
        """Test get_indent_size returns default."""
        assert get_indent_size() == 2

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_size": 4})
    def test_get_indent_size_override(self) -> None:
        """Test get_indent_size with override."""
        assert get_indent_size() == 4

    def test_get_indent_with_tabs_default(self) -> None:
        """Test get_indent_with_tabs returns default."""
        assert get_indent_with_tabs() is False

    @override_settings(WAGTAIL_HTML_EDITOR={"indent_with_tabs": True})
    def test_get_indent_with_tabs_override(self) -> None:
        """Test get_indent_with_tabs with override."""
        assert get_indent_with_tabs() is True

    def test_get_theme_default(self) -> None:
        """Test get_theme returns default."""
        assert get_theme() == "auto"

    @override_settings(WAGTAIL_HTML_EDITOR={"theme": "light"})
    def test_get_theme_override(self) -> None:
        """Test get_theme with override."""
        assert get_theme() == "light"
