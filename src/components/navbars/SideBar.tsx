




const SideNavBar = () => {



    const channels = [
        {
          name: "Channel1",
          id: "1234",
        },
        {
          name: "Channel2",
          id: "1234",
        },
        {
          name: "Channel3",
          id: "1234",
        },
      ];
      const directMessages = [
        {
          name: "Person1",
          id: "1234",
        },
        {
          name: "Person2",
          id: "1234",
        },
        {
          name: "Person3",
          id: "1234",
        },
      ];


      
    return ( 
        <div className="flex flex-col items-start justify-start h-1/3  py-5 pt-20 px-2 xs:px-2 sm:px-0  ">
        <div className="text-lg py-3.5">Channels</div>
        { channels.map((channel)=>(
        <div
          onClick={() => {
            // channel.id && setTrigger("channel");
            // setId(channel.id)
          }}
          className=" cursor-pointer h-4/12 py-2 "
        >
          #{channel.name}
        </div>
        ))}
       
        <div className="text-lg py-3.5 ">DMs</div>
        { directMessages.map((dm)=>(
        <div
          onClick={() => {
            // dm.id && setTrigger("person");
            // setId(dm.id)
          }}
          className=" cursor-pointer h-4/12 py-2"
        >
          {dm.name}
        </div>
        ))}
        
      </div>
     );
}
 
export default SideNavBar;