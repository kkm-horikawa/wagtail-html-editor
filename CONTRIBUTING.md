# Contributing to wagtail-html-editor

Thank you for your interest in contributing!

## Development Setup

### Prerequisites

- Python 3.10+ (for basic development)
- **Python 3.10, 3.11, 3.12, 3.13** (for full matrix testing with tox)
- **uv 0.9.0+** (recommended) or pip
  - Check version: `uv --version`
  - Update: `curl -LsSf https://astral.sh/uv/install.sh | sh`
- **Node.js 18+** (for JavaScript/CSS development)

#### Installing Multiple Python Versions

For full matrix testing, you'll need all supported Python versions installed.

**Using uv (recommended):**
```bash
# Install all supported Python versions
uv python install 3.10 3.11 3.12 3.13

# Verify installations
uv python list
```

**Alternative: Using pyenv:**
```bash
# Install pyenv
curl https://pyenv.run | bash

# Install all supported Python versions
pyenv install 3.10.16
pyenv install 3.11.11
pyenv install 3.12.8
pyenv install 3.13.1

# Make them available globally
pyenv global 3.13.1 3.10.16 3.11.11 3.12.8
```

### Clone and Setup

```bash
git clone https://github.com/kkm-horikawa/wagtail-html-editor.git
cd wagtail-html-editor

# Using uv (recommended)
uv venv
source .venv/bin/activate
uv pip install -e ".[dev]"

# Or using pip
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

> **Note:** We use `uv pip install` instead of `uv sync` because this is a **library project**.
> We don't commit `uv.lock` to maintain dependency flexibility for downstream users.
> See [Project Management](#project-management) for more details.

### Running Tests

```bash
pytest
```

### Running Matrix Tests Locally

To test against all supported Python/Django/Wagtail combinations:

```bash
# Install tox
uv pip install tox

# Run all combinations
tox

# Test specific Python version
tox -e py313

# Run in parallel (faster)
tox -p auto

# List all available environments
tox -l
```

## Supported Versions

### Python Versions
- **3.10** (minimum)
- **3.11**
- **3.12**
- **3.13** (latest)

### Django Versions
- **4.2** (LTS - Long Term Support until April 2026)
- **5.0**
- **5.1**

### Wagtail Versions
- **5.2** (LTS - Long Term Support)
- **6.2**
- **6.3**
- **6.4** (latest)

### Code Style

```bash
# Format code
ruff format .

# Lint
ruff check .

# Type check
mypy src/
```

## Coding Standards

### Overview

| Item | Standard |
|------|----------|
| Formatter/Linter | [Ruff](https://docs.astral.sh/ruff/) |
| Line length | 88 characters |
| Quotes | Double quotes `"` |
| Type hints | Required for public APIs |
| Docstrings | Google style |

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Class | PascalCase | `EnhancedHTMLBlock`, `CodeMirrorWidget` |
| Function/Method | snake_case | `get_editor_config`, `render_content` |
| Variable | snake_case | `editor_options`, `theme_name` |
| Constant | UPPER_SNAKE_CASE | `DEFAULT_THEME`, `EDITOR_HEIGHT` |
| Private method | _leading_underscore | `_initialize_codemirror` |

### Type Annotations

Required for:
- All function parameters and return types
- Public methods
- Complex variables

```python
def get_editor_config(
    theme: str = "light",
    enable_emmet: bool = True,
) -> dict[str, Any]:
    """Get CodeMirror editor configuration.

    Args:
        theme: The editor theme ('light' or 'dark').
        enable_emmet: Whether to enable Emmet abbreviations.

    Returns:
        Configuration dictionary for CodeMirror.
    """
    return {
        "theme": theme,
        "extensions": ["html", "emmet"] if enable_emmet else ["html"],
    }
```

### Import Order

```python
# 1. Standard library
from typing import Any

# 2. Third-party packages
from django import forms
from wagtail.blocks import RawHTMLBlock

# 3. Local imports
from wagtail_html_editor.blocks import EnhancedHTMLBlock
```

Ruff's isort will automatically organize imports.

### Testing Standards

#### Test Structure

```
tests/
├── conftest.py              # Shared fixtures
├── test_blocks.py           # Block tests
├── test_widgets.py          # Widget tests
└── test_integration.py      # Integration tests
```

#### Test Naming

```python
class TestEnhancedHTMLBlock:
    """Tests for EnhancedHTMLBlock."""

    def test_block_instantiation(self):
        """EnhancedHTMLBlock can be instantiated."""
        ...

    def test_renders_html_content(self):
        """Block renders HTML content correctly."""
        ...

    def test_includes_codemirror_media(self):
        """Block includes CodeMirror JS and CSS."""
        ...
```

Naming pattern: `test_<what>_<condition/expectation>`

#### Running Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=wagtail_html_editor --cov-report=html

# Run specific test file
pytest tests/test_blocks.py

# Run specific test
pytest tests/test_blocks.py::TestEnhancedHTMLBlock::test_block_instantiation
```

#### Coverage Target

- Overall: 90%+
- Blocks: 95%+
- Widgets: 90%+

## Project Structure

```
wagtail-html-editor/
├── src/
│   └── wagtail_html_editor/
│       ├── __init__.py
│       ├── apps.py            # Django app config
│       ├── blocks.py          # EnhancedHTMLBlock
│       ├── widgets.py         # CodeMirror widget
│       ├── static/
│       │   └── wagtail_html_editor/
│       │       ├── js/        # JavaScript (CodeMirror integration)
│       │       └── css/       # Styles
│       └── templates/
├── tests/
├── docs/
├── pyproject.toml
├── README.md
└── CONTRIBUTING.md
```

## Branch Strategy

We use a modified Git Flow strategy:

```mermaid
gitGraph
    commit id: "initial"
    branch develop
    checkout develop
    commit id: "dev-1"
    branch feature/issue-1
    checkout feature/issue-1
    commit id: "feat-1"
    commit id: "feat-2"
    checkout develop
    merge feature/issue-1 id: "merge-feat"
    branch fix/issue-5
    checkout fix/issue-5
    commit id: "fix-1"
    checkout develop
    merge fix/issue-5 id: "merge-fix"
    checkout main
    merge develop id: "release v0.1.0" tag: "v0.1.0"
```

### Branch Types

| Branch | Purpose | Base | Merge To |
|--------|---------|------|----------|
| `main` | Production releases | - | - |
| `develop` | Development integration | `main` | `main` |
| `feature/*` | New features | `develop` | `develop` |
| `fix/*` | Bug fixes | `develop` | `develop` |
| `hotfix/*` | Urgent production fixes | `main` | `main` + `develop` |
| `chore/*` | Maintenance, config, dependencies | `develop` | `develop` |
| `docs/*` | Documentation updates | `develop` | `develop` |

### Branch Naming

```
feature/<issue-number>-<short-description>
fix/<issue-number>-<short-description>
hotfix/<issue-number>-<short-description>
chore/<short-description>
docs/<short-description>
```

Examples:
- `feature/1-codemirror-integration`
- `fix/12-fullscreen-mode-bug`
- `hotfix/15-security-patch`
- `chore/update-dependencies`
- `docs/api-reference`

### Protected Branches

| Branch | Direct Push | PR Required | Delete Protection |
|--------|-------------|-------------|-------------------|
| `main` | No | Yes | Yes |
| `develop` | No | Yes | Yes |

## Development Workflow

### For External Contributors (Fork-based)

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/wagtail-html-editor.git
   cd wagtail-html-editor
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/kkm-horikawa/wagtail-html-editor.git
   ```
4. **Create a branch from develop**:
   ```bash
   git fetch upstream
   git checkout -b feature/<issue-number>-<description> upstream/develop
   ```
5. **Make changes, commit, and push to your fork**:
   ```bash
   git push origin feature/<issue-number>-<description>
   ```
6. **Create a Pull Request** from your fork to `upstream/develop`

### Testing Your Changes in a Wagtail Project

Before submitting a PR, it's recommended to test your changes in a real Wagtail project:

1. **Install from your fork branch**:
   ```bash
   # In your Wagtail project directory
   pip install git+https://github.com/<your-username>/wagtail-html-editor.git@<your-branch>
   ```

2. **Add to INSTALLED_APPS** (if not already):
   ```python
   INSTALLED_APPS = [
       # ...
       "wagtail_html_editor",
       # ...
   ]
   ```

3. **Use the block in your page model**:
   ```python
   from wagtail_html_editor import EnhancedHTMLBlock

   class MyPage(Page):
       body = StreamField([
           ('html', EnhancedHTMLBlock()),
       ])
   ```

4. **Start the server** and verify your changes work correctly in Wagtail admin (`/admin/`)

### For Maintainers (Direct)

We recommend using **Draft PRs** for planning and early feedback.

#### 1. Check Existing Issues

Before starting work, check the [Issue Tracker](https://github.com/kkm-horikawa/wagtail-html-editor/issues) and [Project Board](https://github.com/users/kkm-horikawa/projects/8).

- Search for existing issues to avoid duplication
- Comment on the issue to claim it
- If no issue exists, create one first

#### 2. Create a Branch

```bash
# Start from develop
git checkout develop
git pull origin develop

# Create feature or fix branch
git checkout -b feature/<issue-number>-<description>
# or
git checkout -b fix/<issue-number>-<description>
```

#### 3. Create a Draft PR (Recommended)

Creating a Draft PR **before implementing** provides several benefits:

- **Early feedback**: Get architectural guidance before investing time
- **Avoid rework**: Catch potential issues early
- **Communication**: Team knows what you're working on
- **Planning**: Forces you to think through the approach
- **Progress tracking**: Can commit work-in-progress safely

```bash
# Create an empty commit to initialize the PR
git commit --allow-empty -m "feat: initialize <feature name>

Track progress for #<issue-number>"

# Push and create Draft PR
git push -u origin feature/<issue-number>-<description>
```

Then create a **Draft Pull Request** on GitHub with:

- Reference: `Closes #<issue-number>`
- Implementation plan as checkboxes:
  ```markdown
  ## Implementation Plan
  - [ ] Create widget
  - [ ] Add JavaScript integration
  - [ ] Write tests
  - [ ] Update documentation
  ```
- Test strategy outline

#### 4. Implement

- Follow the plan in your Draft PR
- Write tests for new functionality
- Follow existing code style
- Commit regularly with clear messages
- Update PR checkboxes as you progress

#### 5. Test Your Changes

```bash
pytest
ruff check .
ruff format --check .
mypy src/
```

#### 6. Commit

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add CodeMirror integration"
git commit -m "fix: resolve fullscreen mode issue"
git commit -m "docs: update installation guide"
```

#### 7. Mark PR as Ready for Review

When implementation is complete:

- Ensure all tests pass locally
- Update documentation if needed
- Mark PR as "Ready for review"

#### 8. Self-Review and Merge

For **maintainers and core contributors**:

- You may approve and merge your own PRs if:
  - All CI checks pass
  - The change is well-documented
  - Tests are included
  - The PR has been open for reasonable time (for feedback)

Use admin privileges to bypass approval requirements when appropriate.

### Release Process (Maintainers only)

When ready to release:
1. Create PR from `develop` to `main`
2. After merge, tag the release: `git tag v0.x.0`
3. Push tag: `git push origin v0.x.0`

## Project Management

### Our Philosophy

This is an **open-source project built by volunteers**. Our management approach reflects this:

- **No time estimates or strict deadlines** - Contributors work at their own pace
- **Quality over speed** - We'd rather ship it right than ship it fast
- **Clear issue descriptions** - Every issue has acceptance criteria
- **Transparent dependencies** - We use parent/child and blocked-by relationships
- **Version-based milestones** - Group features by version, not by date

### Labels

We use labels to categorize and prioritize work:

| Label | Meaning | When to Use |
|-------|---------|-------------|
| `good first issue` | Great for newcomers | Small, well-defined tasks |
| `atomic` | Small, focused issue | No sub-issues needed, single PR |
| `enhancement` | New feature or improvement | Adding functionality |
| `bug` | Something isn't working | Fixing broken behavior |
| `documentation` | Documentation improvements | README, guides, comments |

### GitHub Projects

We use [GitHub Projects](https://github.com/users/kkm-horikawa/projects/8) to track progress:

| Status | Meaning |
|--------|---------|
| **Backlog** | Not yet prioritized |
| **Todo** | Ready to work on |
| **In Progress** | Actively being worked on |
| **In Review** | PR submitted, awaiting review |
| **Done** | Completed and merged |

Contributors can move their assigned issues through the board as they progress.

### Why No Time Tracking?

Unlike commercial software projects, we don't track:
- Story points
- Time estimates
- Sprint deadlines
- Velocity

**Reasons:**
- OSS contributors are volunteers with varying availability
- Forcing deadlines creates unnecessary pressure
- Quality and correctness matter more than speed
- Contributors work at their own pace

Instead, we focus on:
- **What** needs to be done (clear acceptance criteria)
- **Why** it's important (context and motivation)
- **How** it relates to other work (dependencies)

## JavaScript Development

Since this project integrates CodeMirror 6, JavaScript development is a key part:

### Setting Up JavaScript Development

```bash
# Install Node.js dependencies (when package.json is added)
npm install

# Build JavaScript bundle
npm run build

# Watch for changes during development
npm run dev
```

### JavaScript Code Style

- Use ES6+ syntax
- Follow ESLint configuration
- Write JSDoc comments for public APIs

## Milestones and Roadmap

| Milestone | Focus |
|-----------|-------|
| [v0.1.0](https://github.com/kkm-horikawa/wagtail-html-editor/milestone/1) | Basic Editor - CodeMirror integration |
| [v0.2.0](https://github.com/kkm-horikawa/wagtail-html-editor/milestone/2) | Enhanced Features - Emmet, autocomplete |
| [v0.3.0](https://github.com/kkm-horikawa/wagtail-html-editor/milestone/3) | Fullscreen Mode |
| [v1.0.0](https://github.com/kkm-horikawa/wagtail-html-editor/milestone/4) | Stable Release |

## Questions?

Open an [Issue](https://github.com/kkm-horikawa/wagtail-html-editor/issues) for questions or discussions.
