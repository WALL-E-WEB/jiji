# scss

## 工具

```scss
在线转换：https://www.sassmeister.com/
```

## $ 变量

```
$width: 5em;
```



## & 父类选择器

```scss
#main {
  color: black;
    &:hover { color: red; }
    &.active{
        color:blue;
    }
}


/// compile
#main {
  color: black;
}
#main:hover {
  color: red;
}
#main.active {
  color: blue;
}
```

## \#{} 包裹变量

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}

/// compile
p {
  font: 12px/30px; 
}
```

## @import

```scss
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
/// 导入多个
@import "rounded-corners", "text-shadow";
```

## @extend

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

##  @if

```scss
@if 1 + 1 == 2 { border: 1px solid; }
```



## 遍历

### @each

@each $key,$value in  \<list or map\>

```scss
$colors : (
    "pink"     : #E20071,
    "blue"     : #00A3DA,
    "gray"     : #939394,
    "darkGray" : #939394,
    "yellow"   : #FEA347,
    "green"    : #4CA66B,
    "white"    : #FFFFFF,
    "black"    : #1B1B1B,
);

:root{
    @each $key, $value in $colors {
        --#{$key} : #{$value};
    }
}
      
使用：
$pink     : var(--pink);
...
```

```scss
$sizes:20px,22px,24px;

@each $size in $sizes {
	.icon-#{$size} {
		font-size:$size
	}
}

```

```
@each $var1, $var2 in <map>

@each $header, $color in (h1: red, h2: green, h3: blue) {
  #{$header} {
    color: $color;
  }
}
```

```scss
@each $color, $border in (red, solid),
                        (green, double){
.#{$color} {
    background-color : $color;
    border: $border;
  }
}
```

### @for

```scss
/// 1-3
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
/// 1-2
@for $i from 1 to 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

###  @while

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

## @mixin 

```scss
@mixin clearfix {
  display: inline-block;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}

/// 使用
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

arguments

```scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { @include sexy-border(blue, 1in); }
p { @include sexy-border($color: blue); }
h1 { @include sexy-border($color: blue, $width: 2in); }
```

不定参

```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}

/// @include 不定参
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}
```

 @content

```scss
$color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}
.colors {
  @include colors { color: $color; }
}
```

## @function

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```

