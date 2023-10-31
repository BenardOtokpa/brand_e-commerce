import { useState } from "react";
import { Button } from "antd";
import{UnorderedListOutlined, AppstoreAddOutlined} from '@ant-design/icons'

const GridListView = () => {
    const [view, setView ] = useState(false);
    return(
        <>
        <div style={{textAlign:'center',marginTop:'2rem', marginBottom:'2rem'}} >
            <Button size="large" icon={<UnorderedListOutlined style={{fontSize:'1.5rem'}}/>}/>
            <Button size="large" icon={<AppstoreAddOutlined style={{fontSize:'1.5rem'}}/>}/>
        </div>
        </>
    )
}

export default GridListView