# wagtail-html-editor

[![PyPI version](https://badge.fury.io/py/wagtail-html-editor.svg)](https://badge.fury.io/py/wagtail-html-editor)
[![CI](https://github.com/kkm-horikawa/wagtail-html-editor/actions/workflows/ci.yml/badge.svg)](https://github.com/kkm-horikawa/wagtail-html-editor/actions/workflows/ci.yml)
[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

## Philosophy

Wagtail's `RawHTMLBlock` is a simple textarea. While this simplicity is intentional, it can be limiting when editors need to write complex HTML layouts directly in the admin interface.

**wagtail-html-editor** bridges this gap by providing a VS Code-like editing experience within Wagtail's admin. Syntax highlighting, auto-indentation, Emmet support, and fullscreen mode make HTML coding in the admin not just possible, but comfortable.

This library is designed as a **standalone package** that can be used independently, while also serving as an optional enhancement for [wagtail-reusable-blocks](https://github.com/kkm-horikawa/wagtail-reusable-blocks).

## Key Features

- **Syntax Highlighting** - HTML, CSS, and JavaScript with proper colorization
- **Auto-indentation** - Smart indentation like VS Code
- **Dark/Light Mode** - Follows Wagtail admin theme or manual toggle
- **HTML Autocomplete** - Tag completion, attribute suggestions
- **Emmet Support** - Expand abbreviations (e.g., `div.container>ul>li*3`)
- **Fullscreen Mode** - Expand editor to use the full panel for comfortable coding
- **Auto-closing Tags** - Automatic closing tag insertion
- **Lightweight** - Built on CodeMirror 6 with minimal bundle size

## Use Cases

- **HTML Layouts** - Write complex HTML directly in Wagtail admin
- **Custom Widgets** - Embed third-party widgets with proper syntax highlighting
- **Email Templates** - Create HTML email templates with visual feedback
- **SVG Content** - Edit inline SVG with syntax support
- **Script Injection** - Add custom scripts with proper code editing

## Installation

```bash
pip install wagtail-html-editor
```

Add to your `INSTALLED_APPS`:

```python
# settings.py
INSTALLED_APPS = [
    # ...
    'wagtail_html_editor',
    # ...
]
```

That's it! You can now use `EnhancedHTMLBlock` in your StreamFields.

## Quick Start

### 1. Use in Your Page Model

```python
from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.admin.panels import FieldPanel
from wagtail_html_editor.blocks import EnhancedHTMLBlock

class ContentPage(Page):
    body = StreamField([
        ('html', EnhancedHTMLBlock()),
        # ... other blocks
    ], blank=True, use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]
```

### 2. Edit HTML in Admin

1. Go to your page in Wagtail admin
2. Add an "HTML" block to the body
3. Start coding with syntax highlighting!
4. Click the fullscreen button for a larger editing area
5. Use Emmet abbreviations for rapid HTML creation

### 3. Render in Template

```html
{% load wagtailcore_tags %}

{% for block in page.body %}
    {% include_block block %}
{% endfor %}
```

## Editor Features

### Syntax Highlighting

The editor provides proper syntax highlighting for:
- HTML tags and attributes
- Inline CSS (`<style>` blocks)
- Inline JavaScript (`<script>` blocks)
- Template syntax (Django/Jinja2)

### Emmet Support

Expand abbreviations with Tab:

| Abbreviation | Expansion |
|-------------|-----------|
| `div.container` | `<div class="container"></div>` |
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `a[href=#]` | `<a href="#"></a>` |
| `!` | HTML5 boilerplate |

### Fullscreen Mode

Click the expand button below the editor to enter fullscreen mode:
- Uses the full left panel (excluding preview area)
- "Done" button at the bottom to exit
- ESC key also exits fullscreen

### Theme Support

The editor automatically follows Wagtail's theme:
- **Auto** (default): Follows Wagtail admin dark/light mode
- **Light**: Always use light theme
- **Dark**: Always use dark theme

## Configuration

All settings are optional. Configure via `WAGTAIL_HTML_EDITOR` in your Django settings:

```python
# settings.py
WAGTAIL_HTML_EDITOR = {
    # Theme: "auto", "light", or "dark"
    'THEME': 'auto',

    # Enable/disable features
    'EMMET_ENABLED': True,
    'AUTOCOMPLETE_ENABLED': True,
    'FULLSCREEN_ENABLED': True,
    'LINE_NUMBERS': True,

    # Editor behavior
    'TAB_SIZE': 2,
    'INDENT_WITH_TABS': False,

    # Keybindings: "default", "vim", "emacs"
    'KEYMAP': 'default',
}
```

### Available Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `THEME` | `'auto'` | Color theme: "auto", "light", or "dark" |
| `EMMET_ENABLED` | `True` | Enable Emmet abbreviation expansion |
| `AUTOCOMPLETE_ENABLED` | `True` | Enable HTML/CSS autocomplete |
| `FULLSCREEN_ENABLED` | `True` | Show fullscreen toggle button |
| `LINE_NUMBERS` | `True` | Show line numbers |
| `TAB_SIZE` | `2` | Number of spaces per tab |
| `INDENT_WITH_TABS` | `False` | Use tabs instead of spaces |
| `KEYMAP` | `'default'` | Keybindings style |

## Integration with wagtail-reusable-blocks

If you're using [wagtail-reusable-blocks](https://github.com/kkm-horikawa/wagtail-reusable-blocks), install with the editor extra:

```bash
pip install wagtail-reusable-blocks[editor]
```

This automatically replaces `RawHTMLBlock` with `EnhancedHTMLBlock` in your reusable blocks.

## Troubleshooting

### Editor Not Loading

**Issue**: The editor shows a plain textarea instead of CodeMirror.

**Solutions**:
1. Check browser console for JavaScript errors
2. Ensure static files are collected: `python manage.py collectstatic`
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Emmet Not Working

**Issue**: Tab doesn't expand Emmet abbreviations.

**Solutions**:
1. Ensure `EMMET_ENABLED` is `True` (default)
2. Check that the cursor is at the end of the abbreviation
3. Some abbreviations may conflict with autocomplete - press Tab twice

### Fullscreen Button Missing

**Issue**: The expand/fullscreen button doesn't appear.

**Solutions**:
1. Ensure `FULLSCREEN_ENABLED` is `True` (default)
2. Check if CSS is loading correctly
3. The button appears below the editor textarea

### Theme Not Matching Wagtail

**Issue**: Editor theme doesn't follow Wagtail's dark/light mode.

**Solutions**:
1. Ensure `THEME` is set to `'auto'` (default)
2. Reload the page after changing Wagtail's theme
3. Check browser console for theme detection errors

## Requirements

| Python | Django | Wagtail |
|--------|--------|---------|
| 3.10+  | 4.2, 5.1, 5.2 | 6.4, 7.0, 7.2 |

See our [CI configuration](.github/workflows/ci.yml) for the complete compatibility matrix.

## Features by Version

### v0.1.0 - MVP (Planned)
- EnhancedHTMLBlock with CodeMirror 6
- Syntax highlighting (HTML/CSS/JS)
- Auto-indentation
- Dark/Light mode support
- Basic autocomplete

### v0.2.0 - Enhanced Features (Planned)
- Emmet support
- Fullscreen mode
- Line numbers toggle
- Custom keybindings (vim, emacs)

### v0.3.0 - Integration (Planned)
- wagtail-reusable-blocks integration
- Live preview support
- Custom theme support

## Documentation

- [Contributing Guide](CONTRIBUTING.md)

## Project Links

- [GitHub Repository](https://github.com/kkm-horikawa/wagtail-html-editor)
- [Issue Tracker](https://github.com/kkm-horikawa/wagtail-html-editor/issues)
- [Related: wagtail-reusable-blocks](https://github.com/kkm-horikawa/wagtail-reusable-blocks)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

BSD 3-Clause License. See [LICENSE](LICENSE) for details.

## Inspiration

- [CodeMirror 6](https://codemirror.net/) - The code editor powering this package
- [Emmet](https://emmet.io/) - The essential toolkit for web-developers
- [wagtail-reusable-blocks](https://github.com/kkm-horikawa/wagtail-reusable-blocks) - Reusable content blocks with slot-based templating
- [VS Code](https://code.visualstudio.com/) - The editing experience we aim to bring to Wagtail
