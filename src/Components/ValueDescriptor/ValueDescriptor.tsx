import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps{
    description: string;
    value: number;
    color: 'primary' | 'default'
    isCurrent?: boolean

}

export default function ValueDescriptor(props: ValueDescriptorProps){
    return<VD.Wrapper>
        <span className='Description'>{props.description}</span>
        <div>
            {
                props.isCurrent &&
                <span className="Currecy">{'R$'}</span>
            }

            <span className="Value">{props.value.toLocaleString('pt-br')}</span>
        </div>

    </VD.Wrapper>
}