import { FunctionComponent, useState } from 'react'
import { Page } from '../../components/page'
import { ICourse, IKnowledge, INews, IResource, IUser } from '../../model'
import history from '../../stores/history'
import { useGetNewsList } from './hooks/use-get-news-list'
import './style.scss'

import Table, { ColumnsType } from 'antd/lib/table'
import { Button, message, Popconfirm, Tag, Tooltip } from 'antd'
import { render } from 'react-dom'
import { PlusOutlined } from '@ant-design/icons'
import { tryCatch } from '../../utils/try-catch'
import { deleteNews } from '../../network/api'
import { NewsModal } from './components/news-modal'


export const NewsManage: FunctionComponent<{}> = () => {
    const { loading, newsList, refreshNewsList } = useGetNewsList()
    const [selectedNews, setSelectedNews] = useState<INews | undefined>(undefined)
    function genItemActionButtons(resource: INews) {
        return <div className='action-container'>
            {resource.content ? 
                <Button type='primary' target='_blank' href={resource.content}>View Content</Button>
                : null}
            <Button type='primary' onClick={() => setSelectedNews(resource)}>Edit</Button>
            <Popconfirm
                placement="right"
                title='Are you sure to delete'
                onConfirm={onDelete(resource.id)}
                okText="Yes"
                cancelText="No">
                <Button type='default'>Delete</Button>
            </Popconfirm>
        </div>
    }
    function genTitle() {
        return <Button type='primary' onClick={() => setSelectedNews({})} >
            <PlusOutlined color='white'/>
        </Button>
    }

    function onDelete(id?: number) { 
        return async () => {
            if (id) {
                const [, err] = await deleteNews(id)
                if (err) {
                    message.error(err.message)
                } else {
                    refreshNewsList()
                }
            }
        }
    }

    const columns: ColumnsType<INews> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            key: 'title',
            dataIndex: 'title',
            ellipsis: {
                showTitle: false,
            },
            render: (title) => (
                <Tooltip placement="topLeft" title={title}>
                    {title}
                </Tooltip>
            ),
        },
        {
            title: 'Album',
            dataIndex: 'album',
            render: (albumUrl) => <img className='album' src={albumUrl} />
            
        },
        {
            title: 'Action',
            render: (_, u) => genItemActionButtons(u)
        }

    ]

    function onOk() {
        setSelectedNews(undefined)
        refreshNewsList()
    }

    function onCancel() {
        setSelectedNews(undefined)
    }
    return <Page title={'Kin Audition'} loading={loading}>
        <Table columns={columns} dataSource={newsList!} className='resource-table' title={genTitle} pagination={false} />
        <NewsModal news={selectedNews} onOK={onOk} onCancel={onCancel} />
    </Page>
}