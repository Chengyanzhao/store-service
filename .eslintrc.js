module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
    },
    'extends': 'google',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaVersion': 2018,
    },
    'rules': {
        'arrow-parens': 0,  // 箭头函数参数括号检查 - 关闭
        'max-len': 0,  // 代码行长度限制 - 关闭
        'semi': ['error', 'never'],  // 强制句末分号 - 关闭
        'object-curly-spacing': 0,  // 强制大括号后没有空格 - 关闭
        'new-cap': 0,
        'space-before-function-paren': 0,
        "linebreak-style": 0
    },
};
