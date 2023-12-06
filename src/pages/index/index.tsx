import MyCard from '../../components/Card/Card'
import MyTable from './Table'
import './index.less'
import { DatePicker, Select, Button, Input  } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import type { DatePickerProps, RangePickerProps,    } from 'antd/es/date-picker';
import type { SelectProps } from 'antd';
import { useBrearStore } from '../../stores/brearStore'

function Index(){
    const brear = useBrearStore(state => state.bears)
    return(
        <div className='myIndex'>
            <div>{brear}</div>
            <div className='cardBox'>
                <div className='item'> 
                    <MyCard data={{title: '模型导入控制台'}}>
                        <MoXingDaoRu></MoXingDaoRu>
                    </MyCard>
                </div>
                <div className='item'>
                    <MyCard data={{title: '模型策略'}}>
                        <MoXingCeLue></MoXingCeLue>
                    </MyCard>
                </div>
            </div>
            <div className='cardLitle'>
                <MyCard data={{title: '交易参数'}}>
                    <JiaoYiCanShu></JiaoYiCanShu>
                </MyCard>
            </div>

            <div style={{overflow: 'hidden'}}>
                {true ? (
                    <div className="run-btn python python-3" >
                        <span>RUN!</span>
                    </div>
                ): (
                    <div className="run-btn vb">
                        <span>Running...</span>
                        <div className="dot"></div>
                    </div>
                )}
            </div>

            <div className='cardTable'>
                <MyCard data={{title: '模型详情'}}>
                    <MyTable></MyTable>
                </MyCard>
            </div>
        </div>

        
    )
}

function MoXingDaoRu(){
    // 日期
    const { RangePicker } = DatePicker;
    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    // 多选
    const options: SelectProps['options'] = [];
    for (let i = 10; i < 36; i++) {
        options.push({
          label: i.toString(36) + i,
          value: i.toString(36) + i,
        });
    }
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return(
        <div className='MoXingDaoRu'>
            {/* 日期 */}
            <div className='box'>
                <div>回测周期</div>
                <div style={{flex: 1,textAlign: 'right', minWidth: '350px'}}>
                    <RangePicker
                        style={{width: '90%'}}
                        locale={locale}
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onOk={onOk}
                    />
                </div>
            </div>

            {/* 多选 */}
            <div className='box' style={{marginTop: '10px'}}>
                <div>模型选择</div>
                <div style={{flex: 1,textAlign: 'right', minWidth: '350px'}}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '90%' }}
                        defaultValue={['a10', 'c12']}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
            </div>

            {/* 按钮组 */}
            <div className='btns' style={{marginTop: '20px', fontSize: '19px'}}>
                <Button style={{backgroundColor: '#67c23a', color: 'white',fontSize: '12px'}}>保存</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>详细设置</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>导入</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>导出回测结果</Button>
            </div>
        </div>
    )
}

function MoXingCeLue(){
    // 分组选择器
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return(
        <div className='MoXingCeLue'>
            <div className='boxBig'>

                <div className='box'>
                    <div>回测周期</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px'}}>
                        <Select
                            defaultValue="lucy"
                            style={{ width: '90%',textAlign:'left' }}
                            onChange={handleChange}
                            options={[
                            {
                                label: 'Manager',
                                options: [
                                { label: 'Jack', value: 'jack' },
                                { label: 'Lucy', value: 'lucy' },
                                ],
                            },
                            {
                                label: 'Engineer',
                                options: [{ label: 'yiminghe', value: 'Yiminghe' }],
                            },
                            ]}
                        />
                    </div>
                </div>

                <div className='box'>
                    <div>交易延迟</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px',display: 'flex',justifyContent:'space-between'}}>
                        <div style={{flex: 1}}>
                            <Input style={{ width: '80%' }} placeholder="Basic usage" />
                        </div>
                        <div style={{flex: 1, position: 'relative'}}>
                                <div style={{position: 'absolute',left: '6%', top: '3px'}}>~</div>
                                <Input style={{ width: '80%' }} placeholder="Basic usage" />
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div>止盈点数</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px'}}>
                        <Input style={{ width: '90%' }} placeholder="Basic usage" />
                    </div>
                </div>
            </div>
            
            <div className='boxBig'>
                <div className='box'>
                    <div>仓位系数</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px'}}>
                        <Input style={{ width: '90%' }} placeholder="Basic usage" />
                    </div>
                </div>

                <div className='box'>
                    <div>持仓时间</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px'}}>
                        <Input style={{ width: '90%' }} placeholder="Basic usage" />
                    </div>
                </div>

                <div className='box'>
                    <div>止损点数</div>
                    <div style={{flex: 1,textAlign: 'right', minWidth: '150px'}}>
                        <Input style={{ width: '90%' }} placeholder="Basic usage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function JiaoYiCanShu(){
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return(
        <div className='JiaoYiCanShu'>
            <div className='box'>
                <div className='title'>收益基准</div>
                <div style={{flex: 1,textAlign: 'right'}}>
                    <Select
                        defaultValue="lucy"
                        style={{ width: '95%',textAlign:'left' }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
            </div>

            <div className='box'>
                <div className='title'>手续费</div>
                <div style={{flex: 1,textAlign: 'right'}}>
                     <Input style={{ width: '95%' }}  />
                </div>
            </div>

            <div className='box'>
                <div className='title'>本金</div>
                <div style={{flex: 1,textAlign: 'right'}}>
                     <Input style={{ width: '95%' }}  />
                </div>
            </div>

            <div className='box'>
                <div className='title'>赎回基准线</div>
                <div style={{flex: 1,textAlign: 'right'}}>
                     <Input style={{ width: '95%' }}  />
                </div>
            </div>

            <div className='box'>
                <div className='title'>止损方式</div>
                <div style={{flex: 1,textAlign: 'right',}}>
                    <Select
                        defaultValue="lucy"
                        style={{ width: '95%',textAlign:'left' }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
            </div>

            <div className='box'>
                <div className='title'>维持保证金比例</div>
                <div style={{flex: 1,textAlign: 'right',}}>
                     <Input style={{ width: '95%' }} />
                </div>
            </div>

            <div className='box'>
                <div className='title'>滑点</div>
                <div style={{flex: 1,textAlign: 'right'}}>
                    <Select
                        defaultValue="lucy"
                        style={{ width: '95%',textAlign:'left' }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
            </div>
            <div style={{textAlign: 'right'}}>
                <Button style={{fontSize: '12px'}}>详细设置</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>深度行情配置</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>压力测试配置</Button>&nbsp;&nbsp;&nbsp;
                <Button style={{fontSize: '12px'}}>保证金配置</Button>
            </div>
        </div>
    )
}


export default Index