document.querySelector('#signoutButton').onclick = () => {
    fetch('http://localhost:3000/api/auth/signout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then((res) => {
        document.location.reload();
    })
}

document.querySelector('#createButton').onclick = () => {
    if (document.querySelector('#postInput').value) {
        fetch('http://localhost:3000/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value: document.querySelector('#postInput').value})
        }).then((res) => {
            document.location.reload();
        })
    }
}

document.querySelectorAll('.item').forEach((item) => {
    item.querySelector('.editButton').onclick = () => {
        window.location = `http://localhost:3000/edit/${item.attributes.itemid.value}`
    }

    item.querySelector('.deleteButton').onclick = () => {
        fetch('http://localhost:3000/api/todo', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: item.attributes.itemid.value})
        }).then((res) => {
            document.location.reload();
        })
    }
});