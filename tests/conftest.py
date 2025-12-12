"""
Pytest configuration and fixtures for wagtail-html-editor tests.
"""

import pytest
from django.contrib.auth import get_user_model


@pytest.fixture
def admin_user(db):
    """Create and return an admin user."""
    User = get_user_model()
    user = User.objects.create_superuser(
        username="admin",
        email="admin@example.com",
        password="password",
    )
    return user


@pytest.fixture
def root_page(db):
    """Return the Wagtail root page."""
    from wagtail.models import Page

    return Page.objects.get(depth=1)


@pytest.fixture
def site(db, root_page):
    """Return the default Wagtail site."""
    from wagtail.models import Site

    site, _ = Site.objects.get_or_create(
        is_default_site=True,
        defaults={
            "hostname": "localhost",
            "port": 80,
            "root_page": root_page,
            "site_name": "Test Site",
        },
    )
    return site
