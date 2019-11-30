# hexo-simple-image

## Features

Use markdown tag import image.

## Installation

``` bash
npm install hexo-simple-image --save
```

## Option

configure it in `_config.yml`.

```yaml
post_asset_folder: true
```

## Usage

### New Post

After setting option, when creating a new article, a folder will be automatically generated to place pictures.

```n
+ source
    + _post
        + new_post.md
        + new_post
            + new_post.png
```

After that you can use it like

```markdown
![my post image](./new_post/new_post.png)
```

### Old Post

You should create a folder manually with the same name as the post. After the same as `new post`.
