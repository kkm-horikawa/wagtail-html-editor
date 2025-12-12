"""
Pytest configuration for wagtail-html-editor tests.
"""

import django
from django.conf import settings


def pytest_configure():
    """Configure Django settings for tests."""
    if not settings.configured:
        settings.configure(
            DEBUG=True,
            DATABASES={
                "default": {
                    "ENGINE": "django.db.backends.sqlite3",
                    "NAME": ":memory:",
                }
            },
            INSTALLED_APPS=[
                "django.contrib.contenttypes",
                "django.contrib.auth",
                "wagtail",
                "wagtail.admin",
                "wagtail.documents",
                "wagtail.images",
                "wagtail.search",
                "wagtail.sites",
                "wagtail.users",
                "taggit",
                "wagtail_html_editor",
            ],
            ROOT_URLCONF="tests.urls",
            SECRET_KEY="test-secret-key",
            USE_TZ=True,
            WAGTAIL_SITE_NAME="Test Site",
        )
        django.setup()
