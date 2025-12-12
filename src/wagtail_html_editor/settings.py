"""
Settings handler for wagtail-html-editor.

Configuration is read from Django settings via WAGTAIL_HTML_EDITOR dict.

Example:
    # settings.py
    WAGTAIL_HTML_EDITOR = {
        "emmet": True,
        "indent_size": 2,
        "indent_with_tabs": False,
        "theme": "auto",
    }
"""

from typing import Any, Literal

from django.conf import settings
from django.core.exceptions import ImproperlyConfigured

# Default configuration values
DEFAULTS: dict[str, Any] = {
    # Enable Emmet abbreviation expansion
    "emmet": True,
    # Number of spaces for indentation (2 or 4)
    "indent_size": 2,
    # Use tabs instead of spaces for indentation
    "indent_with_tabs": False,
    # Theme mode: 'auto' (follow Wagtail), 'light', or 'dark'
    "theme": "auto",
}

# Valid values for specific settings
VALID_INDENT_SIZES = (2, 4)
VALID_THEMES = ("auto", "light", "dark")

ThemeType = Literal["auto", "light", "dark"]


def _validate_config(config: dict[str, Any]) -> None:
    """
    Validate the configuration values.

    Raises:
        ImproperlyConfigured: If any configuration value is invalid.
    """
    if "emmet" in config and not isinstance(config["emmet"], bool):
        raise ImproperlyConfigured("WAGTAIL_HTML_EDITOR['emmet'] must be a boolean")

    if "indent_size" in config:
        if config["indent_size"] not in VALID_INDENT_SIZES:
            raise ImproperlyConfigured(
                f"WAGTAIL_HTML_EDITOR['indent_size'] must be one of {VALID_INDENT_SIZES}"
            )

    if "indent_with_tabs" in config and not isinstance(
        config["indent_with_tabs"], bool
    ):
        raise ImproperlyConfigured(
            "WAGTAIL_HTML_EDITOR['indent_with_tabs'] must be a boolean"
        )

    if "theme" in config:
        if config["theme"] not in VALID_THEMES:
            raise ImproperlyConfigured(
                f"WAGTAIL_HTML_EDITOR['theme'] must be one of {VALID_THEMES}"
            )


def get_config() -> dict[str, Any]:
    """
    Get the merged configuration with defaults.

    Returns:
        dict: Configuration dictionary with all settings.

    Raises:
        ImproperlyConfigured: If configuration is invalid.
    """
    user_config = getattr(settings, "WAGTAIL_HTML_EDITOR", {})

    if not isinstance(user_config, dict):
        raise ImproperlyConfigured("WAGTAIL_HTML_EDITOR must be a dictionary")

    # Warn about unknown settings
    unknown_keys = set(user_config.keys()) - set(DEFAULTS.keys())
    if unknown_keys:
        import warnings

        warnings.warn(
            f"Unknown WAGTAIL_HTML_EDITOR settings: {unknown_keys}",
            stacklevel=2,
        )

    _validate_config(user_config)

    # Merge with defaults
    config = {**DEFAULTS, **user_config}

    return config


def get_emmet_enabled() -> bool:
    """Get whether Emmet is enabled."""
    result: bool = get_config()["emmet"]
    return result


def get_indent_size() -> int:
    """Get the indent size (2 or 4)."""
    result: int = get_config()["indent_size"]
    return result


def get_indent_with_tabs() -> bool:
    """Get whether to use tabs for indentation."""
    result: bool = get_config()["indent_with_tabs"]
    return result


def get_theme() -> ThemeType:
    """Get the theme mode ('auto', 'light', or 'dark')."""
    result: ThemeType = get_config()["theme"]
    return result
